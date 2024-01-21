let name;
// prompt("Please Enter your name ..?");
// const age = prompt("Please Enter the Age");
function App() {
  /* 
    Why we enclose all the JSX into an empty tag, because in react we can't   
    use adjacent HTML element we need to use React Fragment to enclose the
    multiple html adjacent Element and then we can use multiple adjacent
    Element
    */
  return (
    <>
      {/*
        If we want to use a variable name inside a JSX or if we want 
        to use any javascript feature like print if else statement then 
        we can do it in JSX by kept statement into a curly braces 
        */}
      <h1>Hello {name}</h1>
      {/* <h2>Your Age is : {age}</h2> */}
      <h2>Let's Learn More Feature JSX </h2>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
