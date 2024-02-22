import React from "react";
import styles from "./coverflow.module.css";
export default class CoverFlow extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "cover flow",
    };
  }

  render() {
    return (
      <>
        <div className={styles.content}>
          <div>Coverflow</div>
        </div>
      </>
    );
  }
}
