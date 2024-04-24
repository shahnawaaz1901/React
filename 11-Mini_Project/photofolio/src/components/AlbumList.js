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
  const [formVisible, setFormVisiblity] = useState(false);
  const { notify, albums } = props;

  function changeFormVisiblity(e) {
    if (e) {
      e.preventDefault();
    }
    setFormVisiblity(!formVisible);
  }
  const { dispatch } = props;
  async function addNewAlbum(albumName) {
    const data = {
      name: albumName,
      createdOn: new Date(),
    };
    notify("Album Created Successfully !!");
    await addDoc(collection(db, "albums"), data);
    changeFormVisiblity();
  }

  return (
    <>
      {formVisible ? <AlbumForm addNewAlbum={addNewAlbum} /> : ""}

      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h1>Albums</h1>
          </div>
          <div onClick={changeFormVisiblity}>
            <button className={formVisible ? styles.cancelBtn : styles.addBtn}>
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
    </>
  );
}

export default AlbumList;
