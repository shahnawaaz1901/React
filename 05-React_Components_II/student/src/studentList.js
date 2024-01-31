import { Component } from "react";
import Student from "./student.js";

export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Student name="Ashu Ansari" marks={90} />
        <Student name="Sadaf Noor" marks={85} />
        <Student name="Toshiba Ansari" marks={91} />
        <Student />
      </>
    );
  }
}

//* Setting Student Component defaultProps Where Student is Class Component
Student.defaultProps = {
  name: "Student",
  marks: "N/A",
};

/* 
    Suppose we Just forget to pass the somedata on props so value of that 
    key in the component is undefined and we wouldn't be able to render
    the undefined on the browser, so for prevent this condition we can just
    pass the default props which is over riden the undefined value.

    We can set default props by just setting the defaultProps properties in
    the component which we want to set the Property
*/
