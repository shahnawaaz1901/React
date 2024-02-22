import React from "react";
import styles from "./music.module.css";
export default class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "music",
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
