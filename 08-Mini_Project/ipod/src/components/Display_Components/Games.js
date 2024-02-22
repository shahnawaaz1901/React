import React from "react";
import styles from "./games.module.css";
export default class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "games",
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
