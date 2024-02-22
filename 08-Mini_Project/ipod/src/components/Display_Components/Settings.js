import React from "react";
import styles from "./settings.module.css";
export default class Setting extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "settings",
    };
  }

  render() {
    return (
      <>
        <div className={styles.content}></div>
      </>
    );
  }
}
