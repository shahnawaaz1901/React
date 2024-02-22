import React from "react";
import styles from "./home.module.css";
export default class HomePage extends React.Component {
  render() {
    const { options } = this.props.props;
    const { currentOption } = this.props.props;
    console.log(this.props.props);
    return (
      <React.Fragment>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h3>iPod.js</h3>
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
      </React.Fragment>
    );
  }
}
