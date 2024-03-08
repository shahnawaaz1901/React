import { useEffect, useRef } from "react";
import styles from "./albumForm.module.css";

export default function AlbumForm(props) {
  const { addNewAlbum } = props;
  const inputRef = useRef("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleClearBtnClick() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function handleAddBtnClick() {
    const albumName = inputRef.current.value;
    if (albumName) {
      addNewAlbum(albumName);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
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
