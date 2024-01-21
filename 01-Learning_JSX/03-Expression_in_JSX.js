console.log("Script is Connected !!");

/*
    What ever function or operation which solve some something and return 
    corresponding value to it, that's called the expression. In JSX we can
    render any javascript expression and render it on to the browser
*/

/* 
    Because in JSX undefined and null values is are not render on to the 
    browser so if a function not return anything then means value of that 
    function is undefined so function which is return nothing that's nothing 
    to JSX and valuable for JSX, because JSX doesn't care about the undefined
    and null values
*/

/* 
    Anything in JSX if we use any valid expression of javascript which resolve 
    the value we can use the expression just enclosing it into a curly braces 
*/
function Age() {
  return 2024 - 2001;
}

/* 
    If we want we can use the JSX Expression by storing the JSX Value
    to a Javascript Variable then we can able to do. Yes we can able
    to store JSX Expression into a Javascript Variable
*/

const header = <h1>Learn Javascript Expression in JSX</h1>;

function App() {
  let name = "Ashu Ansari";
  //   let Age = 22;
  let isMarried = true;
  let anyCase = null;
  let anyFraud;

  /* 
    If we want to render some expression like boolean,null and undefined then 
    if we directly render then we can't able to render it however we can 
    convert to string using the toString() function and then we able to render 
    the boolean values but this is not applicable on undefined and null values
*/
  /* 
    In Any Other Programming Language if we return something then rest 
    statements which is written after just the return statement that statement 
    is not reachable so how can we return such a big multiple tags from the 
    from the component, just remember we can return multiple properties from 
    by enclosing that in a object same thing we can do by enclosing the whole 
    JSX expression in a normal bracket so that we able to return and render 
    whole JSX in the browser without bracket we can't able to do it, So by 
    enclosing the whole JSX in a bracket and also enclosing the whole tags
    into the parent element so that we able to return the multiple tags in
    a single component
*/
  return (
    <>
      {/* <h1>Learn Javascript Expression in JSX</h1> */}
      {header}
      <p>My Name is {name}</p>
      <p>My Age is {Age()}</p>
      <p>Is Married : {isMarried.toString()}</p>
      <p>Any Case : {anyCase}</p>
      <p>Any Report or Complaint : {anyFraud}</p>
    </>
  );
}
console.log(App());
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
