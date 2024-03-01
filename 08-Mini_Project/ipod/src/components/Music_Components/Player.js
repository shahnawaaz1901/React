import React from "react";
import styles from "./player.module.css";
export default class MusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      maxTime: 228,
      songs: [
        {
          name: "Baby",
          singer: "Justin Bieber, Ludacris",
          poster: "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
          src: "https://pagalworlld.com/files/download/id/4702",
          duration: 220,
          state: "play",
        },
        {
          name: "Heart Attack",
          singer: "Enrique Iglesias",
          poster: "https://pagalworlld.com/siteuploads/thumb/sft25/12369_4.jpg",
          src: "https://pagalworlld.com/files/download/id/12369",
          duration: 231,
          state: "play",
        },
        {
          name: "Love Story",
          singer: "Taylor Swift",
          poster: "https://pagalworlld.com/siteuploads/thumb/sft7/3126_4.jpg",
          src: "https://pagalworlld.com/files/download/id/3126",
          duration: 237,
          state: "play",
        },
        {
          name: "Despacito",
          singer: "Luis Fonsi, Daddy Yankee",
          poster:
            "https://www.pagalworld.com.cm/siteuploads/thumb/sft6/2858_4.jpg",
          src: "https://www.pagalworld.com.cm/siteuploads/files/sfd6/2858/Despacito(PagalWorld.com.cm).mp3",
          state: "play",
          duration: 281,
        },
        {
          name: "Into Your Arms",
          singer: "Witt Lowry",
          poster:
            "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.jpg",
          src: "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.mp3",
          state: "play",
          duration: 193,
        },
      ],
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
                src="https://pagalworlld.com/files/download/id/4702"
                // "https://pagallworld.co.in/wp-content/uploads/2023/06/Enrique-Iglesias-Heart-Attack.mp3"
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
