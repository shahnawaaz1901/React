console.log("Script is Connected !!");
/*
    AND Operator : AND Operator is represent by the "&" ampersent symbol, It's 
            used when we check multiple conditions suppose if we want to showing
            the dashboard then we need to check first user is loggedin and if user
            is loggedin then check if loggedin user is enrolled in course or not,
            so for dashboard we need to check both conditions so instead of chaining
            the mulitple if else we can check both conditions in one if statement 
            seprating both statement by "&&". AND Operator returns the last truth 
            condition and first false condition which we check. Because in AND Operator 
            All conditions must be true.
*/

/*
    In Javascript ""(Empty String), null, undefined, 0 and false excluding this
    everything will be true, so we need to keep in mind that always "false" is
    not a falsy statement in Javascript
*/

/*
    Always Remeber that AND operator always returns the first falsy and last truthy 
    value in the all conditions which we check using the AND operator 
*/

function App() {
  let loggedIn = true;
  let enrolled = true;
  return (
    <>
      <h1>Hello {loggedIn && enrolled ? "Ninja" : "User"}</h1>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
