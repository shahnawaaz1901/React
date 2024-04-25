//* Packages
import { useState } from "react";

//* Internal Modules
import styles from "./albumList.module.css";
import AlbumForm from "./AlbumForm";
import Album from "./Album";

function AlbumList(props) {
  const [formVisible, setFormVisiblity] = useState(false); //* For Form Visiblity
  const { newAlbum, albums, dispatch, notify } = props;

  //* Change form Visiblity
  function changeFormVisiblity(e) {
    if (e) {
      e.preventDefault();
    }
    setFormVisiblity(!formVisible);
  }

  //* For New Album
  async function addNewAlbum(albumName) {
    newAlbum(albumName);
    changeFormVisiblity();
  }

  return (
    <>
      {formVisible ? (
        <AlbumForm addNewAlbum={addNewAlbum} notify={notify} />
      ) : (
        ""
      )}
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
