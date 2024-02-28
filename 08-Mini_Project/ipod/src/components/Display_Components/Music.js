import React from "react";
import List from "../Music_Components/List";
import MusicPlayer from "../Music_Components/Player";

export default class Music extends React.Component {
  render() {
    const { options, selectedOption, selectedElementIndex } =
      this.props.options;

    return (
      <>
        {selectedOption ? (
          <MusicPlayer />
        ) : (
          <List options={{ options, selectedOption, selectedElementIndex }} />
        )}
      </>
    );
  }
}
