import React from "react";
import styles from "./display.module.css";
import HomePage from "./Home";

class Display extends React.Component {
  render() {
    const { selectScreen } = this.props;
    return (
      <div className={styles.displayContainer}>
        {selectScreen ? "" : <HomePage props={this.props} />}
      </div>
    );
  }
}

export default Display;
