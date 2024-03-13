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
          <div
            className={styles.updateBtn}
            onClick={(e) => console.log(e.target)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/14026/14026269.png"
              alt="update-btn"
            />
          </div>
          <div
            className={styles.deleteBtn}
            onClick={(e) => console.log(e.target)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
              alt="delete-btn"
            />
          </div>
        </div>
        <div className={styles.imageTitle}>{title}</div>
      </div>
    </>
  );
}
