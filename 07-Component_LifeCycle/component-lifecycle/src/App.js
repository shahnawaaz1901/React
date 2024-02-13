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
      run: true,
    };
  }
  handleButtonClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  changeTimer = (condition) => {
    console.log("Inside timer");
    this.setState((prevState) => {
      prevState.run = condition;
      return prevState;
    });
  };

  render() {
    return (
      <>
        <TimerOne run={this.state.run} />
        <div>
          <button onClick={() => this.changeTimer(true)}>Start</button>
        </div>
        <div>
          <button onClick={() => this.changeTimer(false)}>Stop</button>
        </div>
      </>
    );
  }
}

export default App;
