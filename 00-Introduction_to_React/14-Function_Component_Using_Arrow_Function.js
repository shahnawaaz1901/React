console.log("Script is COnnected !!");

//* Create Component Using Function Declarations
function App() {
  return (
    <>
      <h1>React Component</h1>
      <p>React is a JavaScript Library</p>
    </>
  );
}

//* Create Component Using Arrow Function using Function Expression
/* 
    Because arrow function implicitly returns then we dont need to write 
    the return keyword only in case when we don't use curly braces
*/
const App1 = () => (
  <>
    <h1>React Component</h1>
    <p>React is a JavaScript Library</p>
    <li>React Contains Virtual DOM</li>
    <li>React is Declarative</li>
    <li>React is Most Popular</li>
  </>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<App1 />, <App />);

/* 
    If we Write just like this then Only App1 Component will be display 
    on to the screen in the web Page
*/
// ReactDOM.createRoot(document.getElementById("root")).render(<App1 />, <App />);

/* 
    If we want to display multiple component then we used again react Fragment 
    feature which is contain a parent and inside that parent we can render 
    multiple components  
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <App1 />
  </>
);
