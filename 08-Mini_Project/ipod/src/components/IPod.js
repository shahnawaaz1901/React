import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import ipod from "./ipod.module.css";

class IPod extends React.Component {
  render() {
    return (
      <div className={ipod.container}>
        <Display />
        <Wheel />
      </div>
    );
  }
}

export default IPod;
