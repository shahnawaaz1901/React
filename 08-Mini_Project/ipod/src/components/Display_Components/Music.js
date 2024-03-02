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
