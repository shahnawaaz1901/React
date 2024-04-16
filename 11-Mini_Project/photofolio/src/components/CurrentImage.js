import styles from "./currentImage.module.css";
function CurrentImage(props) {
  const { imageLink } = props;
  function handleImageRenderingError(e) {
    e.target.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/159/159469.png"
    );
  }
  return (
    <>
      <div className={styles.imageContainer}>
        {/* <div className={styles.image}>
          <img
            src={imageLink}
            alt="Current_Image"
            onError={handleImageRenderingError}
          />
        </div> */}
      </div>
    </>
  );
}

export default CurrentImage;
