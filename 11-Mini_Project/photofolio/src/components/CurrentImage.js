import styles from "./currentImage.module.css";
function CurrentImage(props) {
  const { imageLink, resetCurrentImage } = props;
  function handleImageRenderingError(e) {
    e.target.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/159/159469.png"
    );
  }
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.clostBtn} onClick={resetCurrentImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/15377/15377691.png"
            alt="Close Btn"
          />
        </div>
        <div className={styles.image}>
          <img
            src={imageLink}
            alt="Current_Image"
            onError={handleImageRenderingError}
          />
        </div>
      </div>
    </>
  );
}

export default CurrentImage;
