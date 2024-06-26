//* Packages
import { useEffect, useRef } from "react";

//* Internal Modules
import styles from "./albumForm.module.css";

export default function AlbumForm(props) {
  const { addNewAlbum, notify } = props;
  const inputRef = useRef("");

  //* Focus on Album form When form is Render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //* Clear Album Form
  function handleClearBtnClick() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  //* Add New Album
  function handleAddBtnClick() {
    const albumName = inputRef.current.value;
    if (albumName) {
      addNewAlbum(albumName);
      inputRef.current.value = "";
      inputRef.current.focus();
    } else {
      notify("Album name can't be empty !!", "warn");
    }
  }

  //* Handle Search Bar Typing
  function handleKeyPress(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "");
  }

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.heading}>
          <h1>Create Album</h1>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            id="album-form"
            placeholder="Album Name ..."
            className={styles.inputForm}
            ref={inputRef}
            onKeyUp={handleKeyPress}
          />
          <div className={styles.clearBtn} onClick={handleClearBtnClick}>
            Clear
          </div>
          <div className={styles.addBtn} onClick={handleAddBtnClick}>
            Create
          </div>
        </div>
      </div>
    </>
  );
}
