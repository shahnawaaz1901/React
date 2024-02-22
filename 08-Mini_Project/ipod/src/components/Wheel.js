import React from "react";
import styles from "./wheel.module.css";

class Wheel extends React.Component {
  render() {
    const { changeSelection } = this.props;
    return (
      <div className={styles.wheelContainer}>
        <div className={styles.wheel}>
          <div className={styles.okBtn}></div>
          <div className={`${styles.wheelBtn} ${styles.top}`}>Menu</div>
          <div
            className={`${styles.wheelBtn} ${styles.right}`}
            onClick={() => changeSelection(true)}
          >
            <i className="fa-solid fa-forward-fast"></i>
          </div>
          <div
            className={`${styles.wheelBtn} ${styles.left}`}
            onClick={() => changeSelection(false)}
          >
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
