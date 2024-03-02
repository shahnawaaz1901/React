import React from "react";
import List from "../Music_Components/List";
import MusicPlayer from "../Music_Components/Player";

export default class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          name: "Baby",
          singer: "Justin Bieber, Ludacris",
          poster: "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
          src: "../../../public/music/Baby(PagalWorlld.Com).mp3",
          duration: 220,
          state: "play",
        },
        {
          name: "Heart Attack",
          singer: "Enrique Iglesias",
          poster: "https://pagalworlld.com/siteuploads/thumb/sft25/12369_4.jpg",
          src: "../../../public/music/Enrique-Iglesias-Heart-Attack(PagalWorlld.Com).mp3",
          duration: 231,
          state: "play",
        },
        {
          name: "Love Story",
          singer: "Taylor Swift",
          poster: "https://pagalworlld.com/siteuploads/thumb/sft7/3126_4.jpg",
          src: "../../../public/music/Love-Story(PagalWorlld.Com).mp3",
          duration: 237,
          state: "play",
        },
        {
          name: "Despacito",
          singer: "Luis Fonsi, Daddy Yankee",
          poster:
            "https://www.pagalworld.com.cm/siteuploads/thumb/sft6/2858_4.jpg",
          src: "../../../public/music/Despacito(PagalWorld.com.cm).mp3",
          state: "play",
          duration: 281,
        },
        {
          name: "Into Your Arms",
          singer: "Witt Lowry",
          poster:
            "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.jpg",
          src: "../../../public/music/Into-Your-Arms-Slowed-Reverb.mp3",
          state: "play",
          duration: 193,
        },
      ],
    };
  }
  render() {
    const { options, selectedOption, selectedElementIndex } =
      this.props.options;
    const { currentSongIndex, nextSong } = this.props;
    return (
      <>
        {selectedOption ? (
          <MusicPlayer
            currentSongIndex={currentSongIndex}
            currentSong={this.state.songs[currentSongIndex]}
            nextSong={nextSong}
          />
        ) : (
          <List options={{ options, selectedOption, selectedElementIndex }} />
        )}
      </>
    );
  }
}
