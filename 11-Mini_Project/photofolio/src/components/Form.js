import styles from "./form.module.css";
export default function Form() {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.heading}>
          <h1>Create Album</h1>
        </div>
        <div className={styles.form}>
          <input type="text" id="album-form" placeholder="Album Name ..." />
          <button>Clear</button>
          <button>Create</button>
        </div>
      </div>
    </>
  );
}
