import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import ipod from "./ipod.module.css";

class IPod extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "", //* Represent In Which Screen We Have
      selectedElementIndex: 0, //* Represent Which Option Currently We Selected
      music: {
        selectedOption: "",
        selectedElementIndex: 0,
      },
    };
  }

  //* Select Next Option on Menu
  nextSelectElement() {
    if (this.state.selectedOption === "") {
      this.setState({
        selectedElementIndex:
          this.state.selectedElementIndex + 1 !== 4
            ? this.state.selectedElementIndex + 1
            : 0,
      });
    } else if (this.state.selectedOption === "Music") {
      this.setState({
        music: {
          selectedOption: this.state.music.selectedOption,
          selectedElementIndex:
            this.state.music.selectedElementIndex + 1 !== 3
              ? this.state.music.selectedElementIndex + 1
              : 0,
        },
      });
    }
  }

  //* Select Previous Option on Menu
  previousSelectElement() {
    if (this.state.selectedOption === "") {
      this.setState({
        selectedElementIndex:
          this.state.selectedElementIndex - 1 >= 0
            ? this.state.selectedElementIndex - 1
            : 3,
      });
    } else if (this.state.selectedOption === "Music") {
      this.setState({
        music: {
          selectedOption: this.state.music.selectedOption,
          selectedElementIndex:
            this.state.music.selectedElementIndex - 1 >= 0
              ? this.state.music.selectedElementIndex - 1
              : 2,
        },
      });
    }
  }

  //* For Navigate on the Menu
  nextOrPreviousOptionSelected(decision) {
    if (decision) {
      this.nextSelectElement();
    } else {
      this.previousSelectElement();
    }
  }

  //* Handle Ok Button
  handleClickOnOKBtn() {
    if (this.state.selectedOption === "") {
      this.setState({
        selectedOption:
          this.state.selectedElementIndex === 0
            ? "Cover Flow"
            : this.state.selectedElementIndex === 1
            ? "Music"
            : this.state.selectedElementIndex === 2
            ? "Games"
            : "Settings",
      });
    } else if (this.state.selectedOption === "Music") {
      this.setState({
        music: {
          selectedElementIndex: this.state.music.selectedElementIndex,
          options: this.state.music.options,
          selectedOption:
            this.state.music.selectedElementIndex === 0
              ? "All Songs"
              : this.state.music.selectedElementIndex === 1
              ? "Artists"
              : "Albums",
        },
      });
    }
  }

  //* Handle Click on Menu Button
  handleClickOnMenuButtton() {
    /* 
      Condition is put here because if we play the music then if we 
      click on menu button we should go first to music menu then the 
      main menu 
    */
    if (this.state.music.selectedOption) {
      this.backToMusic();
    } else {
      this.backToMainMenu();
    }
  }

  //* Back to Music Menu
  backToMusic = () => {
    this.setState({
      music: {
        selectedOption: "",
        selectedElementIndex: this.state.music.selectedElementIndex,
        options: ["All Songs", "Artists", "Albums"],
      },
    });
  };

  //* Back to Main Menu
  backToMainMenu = () => {
    this.setState({
      selectedOption: "",
      music: {
        selectedOption: "",
        selectedElementIndex: 0,
        options: ["All Songs", "Artists", "Albums"],
      },
    });
  };

  render() {
    return (
      <div className={ipod.container}>
        <Display
          currentOption={this.state.selectedElementIndex}
          currentScreen={this.state.selectedOption}
          musicOptions={this.state.music}
        />
        <Wheel
          changeSelection={this.nextOrPreviousOptionSelected.bind(this)}
          handleClickOnOKBtn={this.handleClickOnOKBtn.bind(this)}
          homePage={this.handleClickOnMenuButtton.bind(this)}
        />
      </div>
    );
  }
}

export default IPod;
