import { Component } from "react";
import "./App.css";
// import ComponentA from "./Component/component-A";
import TimerOne from "./Timer/timerOne";
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
      run: false,
    };
  }
  handleButtonClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  changeTimer = () => {
    console.log("Inside timer");
    this.setState((prevState) => {
      prevState.run = !prevState.run;
      return prevState;
    });
  };

  render() {
    return (
      <>
        <TimerOne run={this.state.run} />
        <div>
          <button onClick={this.changeTimer}>
            {this.state.run ? "End" : "Start"}
          </button>
        </div>
      </>
    );
  }
}

export default App;
