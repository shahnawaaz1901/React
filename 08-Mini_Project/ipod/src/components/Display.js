import React from "react";
import styles from "./display.module.css";
import HomePage from "./Display_Components/Home";
import CoverFlow from "./Display_Components/CoverFlow";
import Games from "./Display_Components/Games";
import Music from "./Display_Components/Music";
import Setting from "./Display_Components/Settings";

class Display extends React.Component {
  render() {
    const { currentScreen, musicOptions, currentOption } = this.props;
    return (
      <div className={styles.displayContainer}>
        {currentScreen === "Cover Flow" ? (
          <CoverFlow />
        ) : currentScreen === "Music" ? (
          <Music options={musicOptions} />
        ) : currentScreen === "Games" ? (
          <Games />
        ) : currentScreen === "Settings" ? (
          <Setting />
        ) : (
          <HomePage currentOption={currentOption} />
        )}
      </div>
    );
  }
}

export default Display;
