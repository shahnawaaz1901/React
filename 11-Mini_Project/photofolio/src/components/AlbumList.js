import { useEffect, useState } from "react";
import styles from "./albumList.module.css";
import Album from "./Album";
function AlbumList(props) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    setAlbums(["Home", "j", "jskd", "fdjfkjd", "fjf", "sjfk", "fjdkf", "fjk"]);
  }, []);
  const { dispatch } = props;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h1>Albums</h1>
          </div>
          <div onClick={(e) => e.preventDefault()}>
            <button className={styles.addBtn}>Add Album</button>
          </div>
        </div>
        <div className={styles.albumList}>
          {albums.map((album, index) => (
            <div
              key={index}
              className={styles.album}
              onClick={() =>
                dispatch({ type: "images", payload: { name: album } })
              }
            >
              <Album album={album} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlbumList;
