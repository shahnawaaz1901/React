import React from "react";
import styles from "./display.module.css";
class Display extends React.Component {
  render() {
    return (
      <div className={styles.displayContainer}>
        <h1>This is Display Compoent</h1>
      </div>
    );
  }
}

export default Display;
