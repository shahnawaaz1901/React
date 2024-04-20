//* Internal Modules
import styles from "./album.module.css";
import image from "../images/photos.png";

function Album(props) {
  const { album, dispatch } = props;
  return (
    <>
      <div
        className={styles.album}
        onClick={() => dispatch({ type: "images", payload: { name: album } })}
      >
        <div className={styles.albumImage}>
          <img src={image} alt="Album Logo" />
        </div>
        <div className={styles.albumName}>{album.name}</div>
      </div>
    </>
  );
}

export default Album;
