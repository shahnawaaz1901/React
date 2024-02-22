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
        <div className={styles.content}>
          <div>
            <div className={styles.image}>
              <img
                src="https://dictionary.cambridge.org/images/thumb/dice_noun_002_10624.jpg?version=5.0.383"
                alt=""
                className={styles.image}
              />
            </div>
            <div>Games</div>
          </div>
          {/* <div className={styles.image}></div> */}
        </div>
      </>
    );
  }
}
