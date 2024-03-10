import styles from "./imageForm.module.css";
export default function ImageForm() {
  return (
    <div className={styles.imageFormContainer}>
      <div className={styles.heading}>
        <h1>Add Image to Album</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.inputForm}>
          <input type="text" placeholder="Title" />
        </div>
        <div className={styles.inputForm}>
          <input
            type="text"
            placeholder="Image URL"
            // className={styles.inputForm}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.clearBtn}>Clear</div>
          <div className={styles.addBtn}>Add Image</div>
        </div>
      </div>
    </div>
  );
}
