import React from "react";

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
        <h1>This is Games Page</h1>
      </>
    );
  }
}
