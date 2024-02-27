import React from "react";
import styles from "./music.module.css";
export default class Music extends React.Component {
  render() {
    const { options } = this.props;
    const { currentOption } = this.props;
    return (
      <>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2>Music</h2>
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

            {/* <div className={styles.option}>
              <div>Music</div>
              <div className={styles.selectedElement}></div>
            </div>
            <div className={styles.option}>
              <div>Games</div>
              <div className={styles.selectedElement}></div>
            </div>
            <div className={styles.option}>
              <div>Settings</div>
              <div className={styles.selectedElement}></div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
