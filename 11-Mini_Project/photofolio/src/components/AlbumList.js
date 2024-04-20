//* Packages
import { useEffect, useState } from "react";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import db from "../firebase.config";

//* Internal Modules
import Loader from "./Loader";
import styles from "./albumList.module.css";
import AlbumForm from "./AlbumForm";
import Album from "./Album";

function AlbumList(props) {
  const collectionName = "albums";

  const [albums, setAlbums] = useState([]);
  const [loaderVisible, setLoaderVisiblity] = useState(true);
  const [formVisible, setFormVisiblity] = useState(false);
  const { notify } = props;

  function changeFormVisiblity(e) {
    if (e) {
      e.preventDefault();
    }
    setFormVisiblity(!formVisible);
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
      setLoaderVisiblity(false);
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
              <Album album={album} dispatch={dispatch} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AlbumList;
