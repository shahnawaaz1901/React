import { Component } from "react";
import "./App.css";
import ComponentA from "./Component/component-A";
import ErrorBoundary from "./Error.Boundary";
import ComponentB from "./Component/component-B";
// import TimerOne from "./Timer/timerOne";
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
        {/* <TimerOne run={this.state.run} />
        <div>
          <button onClick={this.changeTimer}>
            {this.state.run ? "STOP" : "START"}
          </button>
        </div> */}
        {/* 
          If we wrap our whole App component inside the Error boundary then we can't
          detect the Actual Error because if some small component is failed in the UI
          then Error Boundary render the Fallback UI for a single small component so
          we need to fix this Issue for this we only wrap those component which might
          have chances to crash or where we perform any side effect, and we need to
          create a Error Boundary file seprately, Error boundary is required closing
          tag because there is any situation like we want to enclose come component
          inside the boundary or we want some other component which is not part of
          Error Boundary, that's why we need to close tag seprately
        */}
        <ErrorBoundary>
          <ComponentA />
          {/* 
            This is the Limitation of ErrorBoundary because Component A is crashed we 
            can't see the Component B, because of component A we can't see the component 
            B so for this we need to put the seprate Error Boundary for the Every 
            Component 
          */}
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
