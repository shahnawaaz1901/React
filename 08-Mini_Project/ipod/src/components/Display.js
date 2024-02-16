import React from "react";
import styles from "./display.module.css";
class Display extends React.Component {
  render() {
    return (
      <div className={styles.displayContainer}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h3>iPod.js</h3>
          </div>
          <div className={styles.main}>
            <div>Cover Flow</div>
            <div>Music</div>
            <div>Games</div>
            <div>Settings</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
