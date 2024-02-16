import React from "react";
import IPod from "./components/IPod";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <IPod />
      </>
    );
  }
}
export default App;
