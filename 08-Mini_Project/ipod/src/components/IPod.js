import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import ipod from "./ipod.module.css";

class IPod extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedElementIndex: 0,
      options: ["Cover Flow", "Music", "Games", "Settings"],
    };
  }

  nextSelectElement() {
    this.setState((prevState) => {
      prevState.selectedElementIndex += 0.5;
      if (prevState.selectedElementIndex === this.state.options.length) {
        prevState.selectedElementIndex = 0;
      }
      return prevState;
    });
  }
  previousSelectElement() {
    this.setState((prevState) => {
      prevState.selectedElementIndex -= 0.5;
      if (prevState.selectedElementIndex < 0) {
        prevState.selectedElementIndex = this.state.options.length - 1;
      }
      return prevState;
    });
  }
  nextOrPreviousOptionSelected(decision) {
    console.log("CLick");
    if (decision) {
      this.nextSelectElement();
    } else {
      this.previousSelectElement();
    }
  }

  render() {
    return (
      <div className={ipod.container}>
        <Display
          options={this.state.options}
          currentOption={this.state.selectedElementIndex}
        />
        <Wheel changeSelection={this.nextOrPreviousOptionSelected.bind(this)} />
      </div>
    );
  }
}

export default IPod;
