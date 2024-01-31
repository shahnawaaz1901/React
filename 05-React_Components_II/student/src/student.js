// import { Component } from "react";

/*
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
    console.log(this.props);
    return (
      <>
        <h1>Name : {this.props.name}</h1>
        <h2>Marks : {this.props.marks}</h2>
      </>
    );
  }
}
*/

/* 
    Because we dont have any this keyword value in the functions so instead 
    of "this" keyword props we recieve in the argument 
*/

/*
    One thing that we need to remember that is we can't modify the props
    we can read the props in child Component but can not update the props 
    from the child component this permission is only allows for the parent
*/
export default function Student(props) {
  /*
    Thrown error can't assign value to read only property, because we can't 
    modify the props however we can modify the states using the setStates function
    props.name = "Ashu";
  */
  console.log(props);
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Marks : {props.marks}</h2>
    </>
  );
}
