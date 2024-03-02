import React from "react";
import styles from "./wheel.module.css";
import Zingtouch from "zingtouch";

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      angle: 0,
      eventDone: true,
    };
  }

  componentDidMount = () => {
    const zt = new Zingtouch.Region(document.body);
    const element = document.getElementById("One");
    zt.bind(element, "rotate", (e) => {
      if (e.detail.distanceFromOrigin >= 50 && this.state.eventDone) {
        this.props.changeSelection(true);
        this.setState({ eventDone: false });
      } else if (e.detail.distanceFromOrigin <= -50 && this.state.eventDone) {
        this.props.changeSelection(false);
        this.setState({ eventDone: false });
      }
    });
  };

  componentDidUpdate() {
    if (!this.state.eventDone) {
      setTimeout(() => {
        this.setState({ eventDone: true });
      }, 200);
    }
  }

  render() {
    return (
      <div id="One" className={styles.wheelContainer}>
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
