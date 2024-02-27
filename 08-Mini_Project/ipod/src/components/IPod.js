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
    this.setState({ selectedOption: "" });
  }

  render() {
    return (
      <div className={ipod.container}>
        {console.log(this.state.music.selectedOption)}
        <Display
          options={this.state.options}
          currentOption={this.state.selectedElementIndex}
          selectScreen={this.state.selectedOption}
          musicOptions={this.state.music}
        />
        <Wheel
          changeSelection={this.nextOrPreviousOptionSelected.bind(this)}
          handleClickOnOKBtn={this.changeSelectedScreen.bind(this)}
          homePage={this.backToHomePage.bind(this)}
        />
      </div>
    );
  }
}

export default IPod;
