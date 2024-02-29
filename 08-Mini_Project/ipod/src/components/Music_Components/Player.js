import React from "react";
import styles from "./player.module.css";
export default class MusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      maxTime: 228,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.currentTime === this.state.maxTime) {
        clearInterval(this.timer);
        return;
      }
      this.setState({ currentTime: this.state.currentTime + 1 });
    }, 1000);
  }

  render() {
    const width = (this.state.currentTime / this.state.maxTime) * 100 + "%";
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
            <audio autoPlay id="audio" hidden>
              <source
                src="https://pagallworld.co.in/wp-content/uploads/2023/06/Enrique-Iglesias-Heart-Attack.mp3"
                type="audio/mpeg"
              />
            </audio>
          </div>
          <div className={styles.musicRun}>
            <div className={styles.meter}>
              <div
                style={{
                  height: 100 + "%",
                  width: `${width}`,
                  backgroundColor: "rgb(100, 100, 255)",
                }}
              ></div>
            </div>
            <div className={styles.time}>
              <div className={styles.currentTime}>
                {new Date(this.state.currentTime * 1000)
                  .toISOString()
                  .slice(14, 19)}
              </div>
              <div className={styles.totalTime}>03:42</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
