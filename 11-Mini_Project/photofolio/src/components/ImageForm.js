import styles from "./imageForm.module.css";
import { useRef } from "react";
import db from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";

export default function ImageForm(props) {
  const { imageCategory, notify, data } = props;
  const titleRef = useRef(),
    imageURLRef = useRef();

  function addImage() {
    const data = {
      title: titleRef.current.value,
      imageURL: imageURLRef.current.value,
    };

    clearInputs();
    addDoc(collection(db, imageCategory), data);
    notify("Image Added Successfully !!");
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
          <input type="text" placeholder="Image URL" ref={imageURLRef} />
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
