import styles from "./imageForm.module.css";
import { useRef } from "react";
import db from "../firebase.config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function ImageForm(props) {
  const { imageCategory, notify, imageWhichUpdate: imageData } = props;
  const titleRef = useRef(),
    imageURLRef = useRef();

  function addImage() {
    if (!titleRef.current.value) {
      notify("Title Can't be Empty !!", "warn");
      return;
    }

    if (!imageURLRef.current.value) {
      notify("Image URL Can't be Empty !!", "warn");
      return;
    }
    const data = {
      title: titleRef.current.value,
      imageURL: imageURLRef.current.value,
    };

    clearInputs();
    if (imageData) {
      setDoc(doc(db, imageCategory, imageData.id), data);
      notify("Image updated Successfully !!");
    } else {
      addDoc(collection(db, imageCategory), data);
      notify("Image Added Successfully !!");
    }
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
          <input
            type="text"
            placeholder="Title"
            ref={titleRef}
            required
            defaultValue={imageData ? imageData.title : ""}
          />
        </div>
        <div className={styles.inputForm}>
          <input
            type="text"
            placeholder="Image URL"
            ref={imageURLRef}
            required
            defaultValue={imageData ? imageData.imageURL : ""}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.clearBtn} onClick={clearInputs}>
            Clear
          </div>
          <div className={styles.addBtn} onClick={addImage}>
            {imageData ? "Update Image" : "Add Image"}
          </div>
        </div>
      </div>
    </div>
  );
}
