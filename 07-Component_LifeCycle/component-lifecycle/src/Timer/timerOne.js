import React from "react";

/*
    Order of Execution of Each Phase

    Mounting Phase :
    constructor() -> static getDerivedStateFromProps() -> render() -> componentDidMount()

    Updating Phase :
    static getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()

    UnMounting Phase :
*/

export default class TimerOne extends React.Component {
  //*All the function Methods is Written in Order of invokaton

  //* Part of Mounting Phase
  constructor() {
    //* Calling the Parent Class Constructor before writing anything in constructor
    super();
    this.state = {
      //   num: 0,
      time: 0,
    };
  }

  //* Part of Both Mounting and Updating Phase
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps function");
    return null;
  }

  //* Part of Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate function");
    console.log(this.state.time);
    console.log(nextProps);
    console.log(this.props.run);
    return this.props.run !== nextProps.run || this.state.time % 5 === 0;
    /* 
        Return true means we want to re render the component because re rendering 
        only done in case in which we not return anything from shouldComponentUpdate
        in that case this function implicitly returns true or we return true in this
        function
    */
    // if (this.state.time % 5 === 0) {
    // return true;
    // } else {
    //   return false;
    // }
  }

  //* Part of Both Mounting and Updating
  render() {
    console.log("Render function");
    /* 
        Because Render function is kept to be pure so we need to not clear the 
        interval inside the render function
    */
    return (
      <>
        <h1>
          Time Spent -&nbsp;
          {/* 
            Here we multiply time by 1000 because we increase miliseconds by 1 so 
            if we want to increase with 1 second then we need to multiply with 1000 
            because 1 second is equals to 1000 miliseconds
        */}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
        {/* <h2>{this.state.num}</h2> */}
        {/* <button onClick={this.handleButtonClick}>Increase Counter</button> */}
      </>
    );
  }

  //* Part of Updating Phase
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("GetSnapshotBeforeUpdate function");
    return null;
  }

  //* Part of Mounting Phase
  componentDidMount() {
    console.log("ComponentDidMount function");
  }

  //* Part of Updating Phase
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate function");
    console.log(prevProps);
    //* Because initially prevProps and this.props is same so timer not started
    /*
      Initially Our Props run is false so prevProps.run and this.props.run 
      both are false and if we change props on onClick event so int that
      case preProps.run is false and this.props.run is false so we enter into 
      the loop and after entering loop we again check if this.props.run is true
      or false if it's true then run timer and if it's false then clear the 
      interval
    */
    if (prevProps.run !== this.props.run) {
      if (this.props.run) {
        this.timer = setInterval(() => {
          this.setState((prevState) => {
            prevState.time += 1;
            return prevState;
          });
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
    /* 
        Because setInterval and setTimeOut is asynchronous operation so output is 
        unpredictable so we can say this is also a side effect, because in setInterval
        it's automatically runs whenever we write setInterval until the condition we
        clear the interval, so everytime we dont need to change we can set setInterval
        at the first when component is loaded
    */
  }

  //* ComponentWillUnmount Called when a Component Removed From the DOM
  /* 
    Because now we have a button which onClick event which decide that we need 
    to show or remove the timer, so here we can remove timer at the UnMounting
    phase because this function is called just before we remove the Component
    from the DOM, So we use clearInterval here withOut any condition because
    component is destroyed so why we need the condition
    */
  componentWillUnmount() {
    console.log("Component UnMount Called");
    clearInterval(this.timer);
  }
}
