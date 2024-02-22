import React from "react";

export default class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "music",
    };
  }

  render() {
    return (
      <>
        <h1>This is Music Page</h1>
      </>
    );
  }
}
