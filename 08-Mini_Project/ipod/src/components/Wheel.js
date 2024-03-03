import React from "react";
import styles from "./wheel.module.css";
import Zingtouch from "zingtouch";

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      eventDone: true,
    };
  }

  //* Add Rotate Listener to the Wheel
  componentDidMount = () => {
    const zt = new Zingtouch.Region(document.body);
    const element = document.getElementById("wheel");
    zt.bind(element, "rotate", (e) => {
      if (e.detail.distanceFromOrigin >= 50 && this.state.eventDone) {
        this.props.changeSelection(true); //* True Represent that we want to Go for Next Option
        this.setState({ eventDone: false });
      } else if (e.detail.distanceFromOrigin <= -50 && this.state.eventDone) {
        this.props.changeSelection(false); //* True Represent that we want to Go for Next Option
        this.setState({ eventDone: false });
      }
    });
  };

  componentDidUpdate() {
    /* 
      Because if we now change state eventDont After 200 miliseconds 
      our option will be Continously selected Next Option and We Not 
      Able to select Option  
    */
    if (!this.state.eventDone) {
      setTimeout(() => {
        this.setState({ eventDone: true });
      }, 200);
    }
  }

  render() {
    return (
      //* Render the Wheel
      <div id="wheel" className={styles.wheelContainer}>
        <div className={styles.wheel}>
          <div
            className={styles.okBtn}
            onClick={this.props.handleClickOnOKBtn}
          ></div>
          <div
            className={`${styles.wheelBtn} ${styles.top}`}
            onClick={this.props.homePage}
          >
            Menu
          </div>
          <div className={`${styles.wheelBtn} ${styles.right}`}>
            <i className="fa-solid fa-forward-fast"></i>
          </div>
          <div className={`${styles.wheelBtn} ${styles.left}`}>
            <i className="fa-solid fa-backward-fast"></i>
          </div>
          <div className={`${styles.wheelBtn} ${styles.bottom}`}>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-pause"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheel;
