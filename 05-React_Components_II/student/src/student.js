import { Component } from "react";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ashu Ansari",
      marks: 90,
    };
  }

  render() {
    // return this.set.bind(this)("ashu");
    return (
      <>
        <h1>Name : {this.props.name}</h1>
        <h2>Marks : {this.props.marks}</h2>
      </>
    );
  }

  set = (data) => {
    console.log(data);
    this.setState(data, () => {
      return (
        <>
          <h1>Name : {this.state.name}</h1>
          <h2>Marks : {this.state.marks}</h2>
        </>
      );
    });
  };
}
