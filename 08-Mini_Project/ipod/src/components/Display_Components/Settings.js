import React from "react";
import styles from "./settings.module.css";
export default class Setting extends React.Component {
  render() {
    return (
      <>
        <div className={styles.content}>
          <div>
            <div className={styles.image}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Windows_Settings_icon.svg/2184px-Windows_Settings_icon.svg.png"
                alt="settings"
              />
            </div>
            <div>Settings</div>
          </div>
        </div>
      </>
    );
  }
}
