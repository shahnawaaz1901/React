import React from "react";
import styles from "./home.module.css";
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      options: ["Cover Flow", "Music", "Games", "Settings"],
    };
  }
  render() {
    const { options } = this.state;
    const { currentOption } = this.props;
    return (
      <>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>iPod.js</h2>
          </div>
          <div className={styles.main}>
            {options.map((every, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.option} ${
                    index === currentOption ? styles.select : ""
                  }`}
                >
                  <div>{every}</div>
                  <div className={styles.selectedElement}></div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
