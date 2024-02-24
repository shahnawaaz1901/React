import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  componentDidMount() {
    document.title = this.state.firstName + " " + this.state.lastName;
    this.timer = setInterval(() => {
      console.log(window.innerWidth);
    }, 500);
  }

  componentDidUpdate() {
    document.title = this.state.firstName + " " + this.state.lastName;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <div className="section">
          <Row label="First Name">
            <input className="input" onChange={this.handleFirstName} />
          </Row>
          <Row label="Last Name">
            <input className="input" onChange={this.handleLastName} />
          </Row>
        </div>

        <h2>
          Hello, {`${this.state.firstName}`} {`${this.state.lastName}`}
        </h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>{label}</lable>
      <br />
      {props.children}
      <hr />
    </>
  );
}
