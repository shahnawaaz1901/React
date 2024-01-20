console.log("Script is Connected !!");

/* 
    This is(jsxElement) not a component, a component is write within a 
    function that's why it's reusable because we can use function as many 
    time we want this is called reusability of code component is the extended 
    version of function where function returns a jsx element this is called 
    component
*/
// const jsxElement = (
//   <>
//     <h1>React</h1>
//     <p>Feature of React</p>
//   </>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);

/*
    React is Component based library Where we can create Component Via 
    two ways : 
    1. Function Based Components
    2. Classes Based Components

    Both ways of creation component is provide us code reusability feature
*/

/* Create Component */
/* 
    Naming Convension which is used to build component is always start 
    component name capital latter and using this way to create component
    is called react component not a native component, First Rule of functional
    or class based component name starts with Capital Letter 
*/
//* Create Functional Component using the Function Declaration
function App() {
  return (
    <>
      <h1>React</h1>
      <p>Feature of React</p>
    </>
  );
}

function App1() {
  return (
    <>
      <p>Problems of React</p>
    </>
  );
}

function App2() {
  return (
    <>
      <p>Cost of React</p>
    </>
  );
}
/* This is We successfully Create a React Component */
/* Render element using the functional Component */
/*
    This is Not called a functional component because functional component
    not called as direct as a function but we can called functional compo-
    nent in other way, Because just calling a function is not indentify or
    considered as a component

    ReactDOM.createRoot(document.getElementById("root")).render(App());
*/

//* Component is called as native component using angular bracket like a tag
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// ReactDOM.createRoot(document.getElementById("root")).render(<App1 />);

// ReactDOM.createRoot(document.getElementById("root")).render(<App2 />);

/*
    Just returning the JSX Element from the function is not a component,
    but how can we use that function component is also important, if you
    called a component like a function then it's like we called a function
    but if you called using angular bracket then it's known as component
*/
