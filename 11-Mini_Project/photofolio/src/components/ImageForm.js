import styles from "./imageForm.module.css";
import { useRef } from "react";
export default function ImageForm() {
  // const name = useRef();
  const titleRef = useRef(),
    imageURLRef = useRef();

  function addImage(e) {
    console.log(titleRef.current.value);
    console.log(imageURLRef.current.value);
    clearInputs();
  }
  function clearInputs() {
    titleRef.current.value = "";
    imageURLRef.current.value = "";
  }
  return (
    <div className={styles.imageFormContainer}>
      <div className={styles.heading}>
        <h1>Add Image to Album</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.inputForm}>
          <input type="text" placeholder="Title" ref={titleRef} />
        </div>
        <div className={styles.inputForm}>
          <input
            type="text"
            placeholder="Image URL"
            ref={imageURLRef}
            // className={styles.inputForm}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.clearBtn} onClick={clearInputs}>
            Clear
          </div>
          <div className={styles.addBtn} onClick={addImage}>
            Add Image
          </div>
        </div>
      </div>
    </div>
  );
}
