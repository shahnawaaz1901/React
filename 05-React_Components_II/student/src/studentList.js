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
        <Student name="Farheen Ansari" marks={93} />
      </>
    );
  }
}
