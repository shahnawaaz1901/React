import React from "react";
import List from "../Music_Components/List";
import MusicPlayer from "../Music_Components/Player";

export default class Music extends React.Component {
  render() {
    const { options, selectedOption, selectedElementIndex } =
      this.props.options;
    const { currentSong } = this.props;
    return (
      <>
        {selectedOption ? (
          <MusicPlayer song={currentSong} />
        ) : (
          <List options={{ options, selectedOption, selectedElementIndex }} />
        )}
      </>
    );
  }
}
