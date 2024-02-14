import { Component } from "react";

class ComponentA extends Component {
  /* NO SideEffect */
  constructor() {
    super();
    this.state = {
      data: "Component A",
      name: [],
    };
    console.log("Component A Constructor.");
    /*
        We Can't use setState function inside the constructor because 
        component is created after calling the whole constructor, So 
        We Shoudn't use the setState function inside the Constructor
        and we are not allow to change state in constructor :

        this.setState({ name: "From Constructor" });
    */
  }

  /* 
    getDerivedStateFromProps function always return something in the 
    form of object if we dont want to return object then we can return 
    null
    */
  /* No Side Effect */
  /* 
    This getDerivedStateFromProps directly change the state if and only 
    if in one codition,  now question is what is that condition we need
    to understand that getDerivedStateFromProps takes two arguments one
    is props which we recieve from the parent and another one is state 
    which we want to change based on props, we need to remember that state
    not the parent state in here state is current state of the class 
    COmponent, This is the very rare method of Mounting 
*/
  static getDerivedStateFromProps(props, state) {
    /* 
        Because getDerivedStateFromProps is the static method that's why
        value of "this" keyword is undefined inside this function so state
        can't be done  
        
        this.setState({ name: "From Derived State" });
    */
    console.log("Component A GetDerivedStateFromProps");
    return null;
  }

  /* Side Effect Possible and Best Place */
  async componentDidMount() {
    /*
        Because ComponentDidMount Called Only Once that's why it's perfect 
        place to setState using the setState function and because this Mounting
        Phase function is called just after the constructor that's why state is
        change before render component in the browser
    */
    // this.setState({ name: "From Component Mount" });
    console.log("Component A Mounting Phase");
    /* 
      If we write wrong URL then our app is crashed, so that in case of Error We 
      can wrap this inside the Error Boundary For Error Handling, How Ever Console
      will Helps us to identify the Error but suppose if a normal user visit our
      web page then user is confused and he/she 'll not understand what's wrong 
      so for that we need to render a fallback UI, which shown some message that
      Something went wrong please try again or developers is being informed and this
      issue will be fixed soon 
    */
    const response = await fetch("https://jsonplaceholder.typicode.com/user");
    const data = await response.json();
    console.log(data);
    this.setState({ name: data });
  }

  /* No Side Effect */
  render() {
    /* 
        Because when ever we set the State inside the render then React'll 
        re-render the component then again we set the state so again we 
        re-render the component so we stuck at infinity loop of re rendering, 
        so we shouldn't set the state inside the render function otherwise 
        we stuck at infinity loop or we can say after changing the state 
        setState() called render implicitly
        
        this.setState({ name: "From Render" });
    */
    console.log("Component A Render");

    return (
      <>
        <table border={5}>
          <caption>User Details </caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.name.map((each, index) => (
              <tr key={index}>
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.username}</td>
                <td>{each.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ComponentA;
