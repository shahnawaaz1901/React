import React from "react";

export default class Setting extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "settings",
    };
  }

  render() {
    return (
      <>
        <h1>This is Settings Page</h1>
      </>
    );
  }
}
