import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import ipod from "./ipod.module.css";
import zingtouch from "zingtouch";

class IPod extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedElementIndex: 0,
      options: ["Cover Flow", "Music", "Games", "Settings"],
    };
  }

  nextSelectElement() {
    this.setState({
      selectedElementIndex:
        this.state.selectedElementIndex + 1 !== this.state.options.length
          ? this.state.selectedElementIndex + 1
          : 0,
    });
  }
  previousSelectElement() {
    this.setState({
      selectedElementIndex:
        this.state.selectedElementIndex - 1 < 0
          ? this.state.options.length - 1
          : this.state.selectedElementIndex - 1,
    });
  }
  nextOrPreviousOptionSelected(decision) {
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
