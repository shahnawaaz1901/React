import React from "react";
import styles from "./player.module.css";
export default class MusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      currentSong: null,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.currentSong !== props.currentSong) {
      return { currentSong: props.currentSong, currentTime: 0 };
    }
    return null;
  }

  componentDidMount() {
    console.log(document.getElementById("audio"));
    this.timer = setInterval(() => {
      if (this.state.currentTime === this.state.maxTime) {
        clearInterval(this.timer);
        return;
      }
      this.setState({ currentTime: this.state.currentTime + 1 });
    }, 1000);
  }

  componentDidUpdate(props, state) {
    if (state.currentTime === this.state.currentSong.duration) {
      props.nextSong();
      this.setState({ currentTime: 0 });
    }
  }

  render() {
    const { currentSong } = this.state;
    const width = (this.state.currentTime / currentSong.duration) * 100 + "%";
    return (
      <>
        <div className={styles.container}>
          <div className={styles.music}>
            <div className={styles.musicLogo}>
              <img src={currentSong.poster} alt="logo" />
            </div>
            <div className={styles.musicDetail}>
              <div className={styles.song}>{currentSong.name}</div>
              <div className={styles.singer}>{currentSong.singer}</div>
              <audio id="audio">
                <source
                  src={currentSong.src}
                  // "https://pagallworld.co.in/wp-content/uploads/2023/06/Enrique-Iglesias-Heart-Attack.mp3"
                  type="audio/mpeg"
                />
              </audio>
            </div>
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
              <div className={styles.totalTime}>
                {new Date(currentSong.duration * 1000)
                  .toISOString()
                  .slice(14, 19)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
