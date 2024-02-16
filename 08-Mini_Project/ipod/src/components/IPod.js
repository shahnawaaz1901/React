import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";

class IPod extends React.Component {
  render() {
    return (
      <>
        <Display />
        <Wheel />
      </>
    );
  }
}

export default IPod;
