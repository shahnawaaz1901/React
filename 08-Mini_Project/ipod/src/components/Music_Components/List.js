import React from "react";
import styles from "./list.module.css";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      //* Options in Music List
      options: ["All Songs", "Artists", "Albums"],
    };
  }
  render() {
    const { selectedElementIndex } = this.props;
    const { options } = this.state;
    return (
      <>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>Music</h2>
          </div>
          <div className={styles.main}>
            {/* Render All the Options */}
            {options.map((every, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.option} ${
                    index === selectedElementIndex ? styles.select : ""
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
