import { useEffect, useState } from "react";
import styles from "./albumList.module.css";
import Form from "./Form";
import Album from "./Album";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase.config";

function AlbumList(props) {
  const [albums, setAlbums] = useState([]);
  const collectionName = "albums";

  const [formVisible, updateFormVisiblity] = useState(false);

  function addAlbum(e) {
    e.preventDefault();
    updateFormVisiblity(!formVisible);
  }
  const { dispatch } = props;
  useEffect(() => {
    async function fetchAlbums() {
      const collectionReference = collection(db, collectionName);
      onSnapshot(collectionReference, (snapShot) => {
        let data = snapShot.docs.map((each) => ({
          id: each.id,
          ...each.data(),
        }));
        data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setAlbums(data);
      });
    }
    fetchAlbums();
  }, []);

  return (
    <>
      {formVisible ? <Form /> : ""}
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h1>Albums</h1>
          </div>
          <div onClick={addAlbum}>
            <button className={formVisible ? styles.cancelBtn : styles.addBtn}>
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
    </>
  );
}

export default AlbumList;
