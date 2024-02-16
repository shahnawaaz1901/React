import React from "react";
import styles from "./wheel.module.css";

class Wheel extends React.Component {
  render() {
    return (
      <div className={styles.wheelContainer}>
        <div className={styles.wheel}>
          <div className={styles.okBtn}></div>
          <div className={`${styles.wheelBtn} ${styles.top}`}>Menu</div>
          <div className={`${styles.wheelBtn} ${styles.right}`}>
            <i class="fa-solid fa-forward-fast"></i>
          </div>
          <div className={`${styles.wheelBtn} ${styles.left}`}>
            <i class="fa-solid fa-backward-fast"></i>
          </div>
          <div className={`${styles.wheelBtn} ${styles.bottom}`}>
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheel;
