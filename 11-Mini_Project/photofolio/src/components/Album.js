import styles from "./album.module.css";
import image from "../images/photos.png";
function Album() {
  return (
    <>
      <div className={styles.album}>
        <div className={styles.albumImage}>
          <img src={image} alt="Album Logo" />
        </div>
        <div className={styles.albumName}>Home</div>
      </div>
    </>
  );
}

export default Album;
