import { Component } from "react";

class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
    };
    console.log("Component A Constructor.");
  }

  /* 
    getDerivedStateFromProps function always return something in the 
    form of object if we dont want to return object then we can return 
    null
    */
  static getDerivedStateFromProps() {
    console.log("Component A GetDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Component A Mounting Phase");
  }

  render() {
    console.log("Component A Render");
    return <h1>This is {this.state.name}</h1>;
  }
}

export default ComponentA;
