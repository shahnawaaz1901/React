import styles from "./album.module.css";
import image from "../images/photos.png";
function Album(props) {
  const { album } = props;
  return (
    <>
      <div className={styles.albumImage}>
        <img src={image} alt="Album Logo" />
      </div>
      <div className={styles.albumName}>{album}</div>
    </>
  );
}

export default Album;
