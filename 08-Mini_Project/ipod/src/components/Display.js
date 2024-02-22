import React from "react";
import styles from "./display.module.css";
import HomePage from "./Display_Components/Home";
import CoverFlow from "./Display_Components/CoverFlow";
import Games from "./Display_Components/Games";
import Music from "./Display_Components/Music";
import Setting from "./Display_Components/Settings";

class Display extends React.Component {
  render() {
    const { selectScreen } = this.props;
    return (
      <div className={styles.displayContainer}>
        {selectScreen === "Cover Flow" ? (
          <CoverFlow />
        ) : selectScreen === "Music" ? (
          <Music />
        ) : selectScreen === "Games" ? (
          <Games />
        ) : selectScreen === "Settings" ? (
          <Setting />
        ) : (
          <HomePage props={this.props} />
        )}
      </div>
    );
  }
}

export default Display;
