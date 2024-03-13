import styles from "./image.module.css";
export default function Image(props) {
  const { title, imageURL } = props;
  function functionApp(e) {
    e.target.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/159/159469.png"
    );
  }
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src={imageURL} alt="Img" onError={functionApp} />
        </div>
        <div className={styles.operations}>
          <div className={styles.updateBtn}></div>
          <div className={styles.updateBtn}></div>
        </div>
        <div className={styles.imageTitle}>{title}</div>
      </div>
    </>
  );
}
