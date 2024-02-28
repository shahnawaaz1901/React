import React from "react";
import styles from "./player.module.css";
export default class MusicPlayer extends React.Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.music}>
            <div className={styles.musicLogo}>
              <img
                src="http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/srch_universalmusic_00602537713950-GBUM71309059.jpg"
                alt="logo"
              />
            </div>
            <div className={styles.musicDetail}>
              <div className={styles.song}>Heart Attack</div>
              <div className={styles.singer}>Enrique Eglesias</div>
            </div>
          </div>
          <div className={styles.musicRun}>
            <div className={styles.meter}></div>
            <div className={styles.time}>
              <div className={styles.currentTime}>00:00</div>
              <div className={styles.totalTime}>03:42</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
