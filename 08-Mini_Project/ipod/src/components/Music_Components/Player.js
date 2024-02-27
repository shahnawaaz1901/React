import React from "react";
import styles from "./player.module.css";
export default class MusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      music: "",
    };
  }

  render() {
    return (
      <>
        <h1>This is a Music Player</h1>
      </>
    );
  }
}
