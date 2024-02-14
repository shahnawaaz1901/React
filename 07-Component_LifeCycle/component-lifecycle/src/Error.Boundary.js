import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      /* create hasError state which denotes that Error is Occure or not */
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    /* 
        We dont need to check the condition if there is any Error it's automatically 
        set the hasError state to true and returns that's why here we directly return 
        the hasError is true, so that it sets the hasError state to true automatically
    */
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  /*
    Because this Error Boundary is nothing but a Class Component so class component 
    must have the render function, render function also contains our Fall back UI
  */
  render() {
    /* 
        Suppose if this.state.hasError is false and it's not enter in the if 
        condition then how can we return the normal UI in this case we can 
        return the normal UI Component because we recieve whatever component 
        we written inside the boudaries tha components recieve us in the props
        implicitly we dont need to pass components as props explicitly
    */
    console.log(this.state);
    if (this.state.hasError) {
      return (
        <>
          <h1>Something Went Wrong</h1>
          <h2>
            Developers is Being informed and this issue will be fixed Soon !
          </h2>
        </>
      );
    }

    /* 
        All the Children which is inside the Error boundary that children we 
        recieve inside the this.props.children object so that if error is nothing
        then we render the component normally 
    */
    return this.props.children;
  }
}
