import React from "react";
import IPod from "./components/IPod";
import styles from "./app.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <IPod />
      </div>
    );
  }
}
export default App;
