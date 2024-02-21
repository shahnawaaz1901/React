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
            <div className={`${styles.option} ${styles.select}`}>
              <div>Cover Flow</div>
              <div className={styles.selectedElement}></div>
            </div>
            <div className={styles.option}>
              <div>Music</div>
              <div className={styles.selectedElement}></div>
            </div>
            <div className={styles.option}>
              <div>Games</div>
              <div className={styles.selectedElement}></div>
            </div>
            <div className={styles.option}>
              <div>Settings</div>
              <div className={styles.selectedElement}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
