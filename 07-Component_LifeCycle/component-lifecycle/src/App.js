import { Component } from "react";
import "./App.css";
import ComponentA from "./component-A";
// import ComponentB from "./component-B";

/* 
  Because we want to understand the Component LifeCycle then we need to use 
  the Class Component instead of Functional Component 
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ashu",
    };
  }
  render() {
    return (
      <>
        <h1>This is a Class Based Component</h1>
        <ComponentA do={"nothing"} />
      </>
    );
  }
}

export default App;
