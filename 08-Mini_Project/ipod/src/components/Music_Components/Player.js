import React from "react";
import styles from "./player.module.css";
import babySong from "./music/Baby(PagalWorlld.Com).mp3";
import babyImage from "./music/4702_4.jpg";

export default class MusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      currentSong: {
        name: "Baby",
        singer: "Justin Bieber, Ludacris",
        poster: babyImage,
        src: babySong,
        duration: 220,
        state: "play",
      },
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

  //* Check is Song is Completed or Not
  componentDidUpdate(props, state) {
    if (state.currentTime === state.currentSong.duration) {
      this.setState({ currentTime: 0 });
    }
  }

  render() {
    const { currentSong } = this.state;
    //* Calculate Width to Represent How Much Song is Completed
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
              <audio id="audio" autoPlay>
                <source src={currentSong.src} type="audio/mpeg" />
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
                {/* 
                  ISO String Returns Date and Time So We Only Need to 
                  Render the Time that's why we need to slice that 
                  String 
                */}
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
