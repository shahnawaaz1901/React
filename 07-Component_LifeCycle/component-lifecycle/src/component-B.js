import { Component } from "react";

class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component B",
    };
    console.log("Component B Constructor");
  }
  render() {
    console.log("Component B Render");
    return <h1>This is {this.state.name}</h1>;
  }
}

export default ComponentB;
