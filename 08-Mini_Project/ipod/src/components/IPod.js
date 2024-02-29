import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import ipod from "./ipod.module.css";

class IPod extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
      selectedElementIndex: 0,
      options: ["Cover Flow", "Music", "Games", "Settings"],
      music: {
        selectedOption: "",
        selectedElementIndex: 0,
        options: ["All Songs", "Artists", "Albums"],
      },
      home: {
        selectedOption: "",
        selectedElementIndex: 0,
        options: ["Cover Flow", "Music", "Games", "Settings"],
      },
      songsData: {
        songs: [
          {
            name: "Baby",
            singer: "Justin Bieber, Ludacris",
            poster:
              "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
            src: "https://pagalworlld.com/files/download/id/4702",
            duration: "",
            state: "play",
          },
          {
            name: "Heart Attack",
            singer: "Enrique Iglesias",
            poster:
              "https://pagalworlld.com/siteuploads/thumb/sft25/12369_4.jpg",
            src: "https://pagalworlld.com/files/download/id/12369",
            duration: "",
            state: "play",
          },
          {
            name: "Love Story",
            singer: "Taylor Swift",
            poster: "https://pagalworlld.com/siteuploads/thumb/sft7/3126_4.jpg",
            src: "https://pagalworlld.com/files/download/id/3126",
            duration: "",
            state: "play",
          },
          {
            name: "Despacito",
            singer: "Luis Fonsi, Daddy Yankee",
            poster:
              "https://www.pagalworld.com.cm/siteuploads/thumb/sft6/2858_4.jpg",
            src: "https://www.pagalworld.com.cm/siteuploads/files/sfd6/2858/Despacito(PagalWorld.com.cm).mp3",
            duration: "",
            state: "play",
          },
          {
            name: "Into Your Arms",
            singer: "Witt Lowry",
            poster:
              "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.jpg",
            src: "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.mp3",
            duration: "",
            state: "play",
          },
        ],
        currentSongIndex: 0,
      },
    };
  }

  nextSelectElement() {
    if (this.state.selectedOption === "") {
      this.setState({
        selectedElementIndex:
          this.state.selectedElementIndex + 1 !== this.state.options.length
            ? this.state.selectedElementIndex + 1
            : 0,
      });
    } else if (this.state.selectedOption === "Music") {
      this.setState({
        music: {
          selectedOption: this.state.music.selectedOption,
          selectedElementIndex:
            this.state.music.selectedElementIndex + 1 !==
            this.state.music.options.length
              ? this.state.music.selectedElementIndex + 1
              : 0,
          options: ["All Songs", "Artists", "Albums"],
        },
      });
    }
  }

  previousSelectElement() {
    if (this.state.selectedOption === "") {
      this.setState({
        selectedElementIndex:
          this.state.selectedElementIndex - 1 >= 0
            ? this.state.selectedElementIndex - 1
            : this.state.options.length - 1,
      });
    } else if (this.state.selectedOption === "Music") {
      this.setState({
        music: {
          selectedOption: this.state.music.selectedOption,
          selectedElementIndex:
            this.state.music.selectedElementIndex - 1 >= 0
              ? this.state.music.selectedElementIndex - 1
              : this.state.music.options.length - 1,
          options: ["All Songs", "Artists", "Albums"],
        },
      });
    }
  }

  nextOrPreviousOptionSelected(decision) {
    if (decision) {
      this.nextSelectElement();
    } else {
      this.previousSelectElement();
    }
  }

  changeSelectedScreen() {
    if (this.state.selectedOption === "") {
      this.setState({
        selectedOption: this.state.options[this.state.selectedElementIndex],
      });
    } else if (this.state.selectedOption === "Music") {
      this.setState({
        music: {
          selectedElementIndex: this.state.music.selectedElementIndex,
          options: this.state.music.options,
          selectedOption:
            this.state.music.options[this.state.music.selectedElementIndex],
        },
      });
    }
  }

  backToHomePage() {
    if (this.state.music.selectedOption) {
      this.setState({
        music: {
          selectedOption: "",
          selectedElementIndex: this.state.music.selectedElementIndex,
          options: ["All Songs", "Artists", "Albums"],
        },
      });
    } else {
      this.setState({
        selectedOption: "",
        music: {
          selectedOption: "",
          selectedElementIndex: 0,
          options: ["All Songs", "Artists", "Albums"],
        },
      });
    }
  }

  playNextSong = () => {
    this.setState({
      songsData: {
        songs: [
          {
            name: "Baby",
            singer: "Justin Bieber, Ludacris",
            poster:
              "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
            src: "https://pagalworlld.com/files/download/id/4702",
            duration: "",
            state: "play",
          },
          {
            name: "Heart Attack",
            singer: "Enrique Iglesias",
            poster:
              "https://pagalworlld.com/siteuploads/thumb/sft25/12369_4.jpg",
            src: "https://pagalworlld.com/files/download/id/12369",
            duration: "",
            state: "play",
          },
          {
            name: "Love Story",
            singer: "Taylor Swift",
            poster: "https://pagalworlld.com/siteuploads/thumb/sft7/3126_4.jpg",
            src: "https://pagalworlld.com/files/download/id/3126",
            duration: "",
            state: "play",
          },
          {
            name: "Despacito",
            singer: "Luis Fonsi, Daddy Yankee",
            poster:
              "https://www.pagalworld.com.cm/siteuploads/thumb/sft6/2858_4.jpg",
            src: "https://www.pagalworld.com.cm/siteuploads/files/sfd6/2858/Despacito(PagalWorld.com.cm).mp3",
            duration: "",
            state: "play",
          },
          {
            name: "Into Your Arms",
            singer: "Witt Lowry",
            poster:
              "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.jpg",
            src: "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.mp3",
            duration: "",
            state: "play",
          },
        ],
        currentSongIndex:
          this.state.songsData.currentSongIndex + 1 !==
          this.state.songsData.songs.length
            ? this.state.songsData.currentSongIndex + 1
            : 0,
      },
    });
  };

  playPreviousSong = () => {
    this.setState({
      songsData: {
        songs: [
          {
            name: "Baby",
            singer: "Justin Bieber, Ludacris",
            poster:
              "https://pagalworlld.com/siteuploads/thumb/sft10/4702_4.jpg",
            src: "https://pagalworlld.com/files/download/id/4702",
            duration: "",
            state: "play",
          },
          {
            name: "Heart Attack",
            singer: "Enrique Iglesias",
            poster:
              "https://pagalworlld.com/siteuploads/thumb/sft25/12369_4.jpg",
            src: "https://pagalworlld.com/files/download/id/12369",
            duration: "",
            state: "play",
          },
          {
            name: "Love Story",
            singer: "Taylor Swift",
            poster: "https://pagalworlld.com/siteuploads/thumb/sft7/3126_4.jpg",
            src: "https://pagalworlld.com/files/download/id/3126",
            duration: "",
            state: "play",
          },
          {
            name: "Despacito",
            singer: "Luis Fonsi, Daddy Yankee",
            poster:
              "https://www.pagalworld.com.cm/siteuploads/thumb/sft6/2858_4.jpg",
            src: "https://www.pagalworld.com.cm/siteuploads/files/sfd6/2858/Despacito(PagalWorld.com.cm).mp3",
            duration: "",
            state: "play",
          },
          {
            name: "Into Your Arms",
            singer: "Witt Lowry",
            poster:
              "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.jpg",
            src: "https://pagallworld.co.in/wp-content/uploads/2023/08/Into-Your-Arms-Slowed-Reverb.mp3",
            duration: "",
            state: "play",
          },
        ],
        currentSongIndex:
          this.state.songsData.currentSongIndex - 1 < 0
            ? this.state.songsData.songs.length - 1
            : this.state.songsData.currentSongIndex - 1,
      },
    });
  };

  handleWheelButton(clickBtn) {
    if (clickBtn === "next") {
      this.playNextSong();
    } else if (clickBtn === "previous") {
      this.playPreviousSong();
    } else {
      this.playOrPause();
    }
  }
  render() {
    return (
      <div className={ipod.container}>
        <Display
          options={this.state.options}
          currentOption={this.state.selectedElementIndex}
          selectScreen={this.state.selectedOption}
          musicOptions={this.state.music}
          currentSong={
            this.state.songsData.songs[this.state.songsData.currentSongIndex]
          }
        />
        <Wheel
          changeSelection={this.nextOrPreviousOptionSelected.bind(this)}
          handleClickOnOKBtn={this.changeSelectedScreen.bind(this)}
          homePage={this.backToHomePage.bind(this)}
          handleWheelButtonClick={this.handleWheelButton.bind(this)}
        />
      </div>
    );
  }
}

export default IPod;
