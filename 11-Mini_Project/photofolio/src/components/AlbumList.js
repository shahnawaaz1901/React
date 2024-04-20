import { useEffect, useState } from "react";
import styles from "./albumList.module.css";
import AlbumForm from "./AlbumForm";
import Album from "./Album";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import db from "../firebase.config";
import Loader from "./Loader";

function AlbumList(props) {
  const [albums, setAlbums] = useState([]);
  const collectionName = "albums";
  const [loaderVisible, updateLoaderVisiblity] = useState(true);
  const [formVisible, updateFormVisiblity] = useState(false);
  const { notify } = props;

  function changeFormVisiblity(e) {
    if (e) {
      e.preventDefault();
    }
    updateFormVisiblity(!formVisible);
  }

  const { dispatch } = props;
  useEffect(() => {
    async function fetchAlbums() {
      /* 
        Because we want RealTime Updates whenever something is change in the 
        Collection that's why we take the collection Reference instead of 
        Document Reference 
      */
      const collectionReference = collection(db, collectionName);
      onSnapshot(collectionReference, (snapShot) => {
        let data = snapShot.docs.map((each) => ({
          id: each.id,
          ...each.data(),
        }));
        data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setAlbums(data);
      });
      updateLoaderVisiblity(false);
    }
    fetchAlbums();
  }, []);

  async function addNewAlbum(albumName) {
    const data = {
      name: albumName,
      createdOn: new Date(),
    };
    notify("Album Created Successfully !!");
    await addDoc(collection(db, collectionName), data);
    changeFormVisiblity();
  }
  return (
    <>
      {formVisible ? <AlbumForm addNewAlbum={addNewAlbum} /> : ""}
      {loaderVisible ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.heading}>
            <div>
              <h1>Albums</h1>
            </div>
            <div onClick={changeFormVisiblity}>
              <button
                className={formVisible ? styles.cancelBtn : styles.addBtn}
              >
                {formVisible ? "Cancel" : "Add Album"}
              </button>
            </div>
          </div>
          <div className={styles.albumList}>
            {albums.map((album, index) => (
              <div
                key={index}
                className={styles.album}
                onClick={() =>
                  dispatch({ type: "images", payload: { name: album } })
                }
              >
                <Album album={album} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AlbumList;
