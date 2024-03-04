import { useState } from "react";
import styles from "./albumList.module.css";
import Album from "./Album";
function AlbumList() {
  const [albums, setAlbums] = useState([
    "Home",
    "j",
    "jskd",
    "fdjfkjd",
    "fjf",
    "sjfk",
    "fjdkf",
    "fjk",
  ]);
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
          {albums.map((album) => {
            return <Album album={album} />;
          })}
        </div>
      </div>
    </>
  );
}

export default AlbumList;
