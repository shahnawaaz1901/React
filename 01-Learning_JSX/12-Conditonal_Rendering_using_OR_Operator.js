console.log("Script is Connected !!");
/*
    OR Operator : OR Operator is Represented by two pipe symbols "|", OR 
            Operator is used when we want at least one condition is true
            OR Operator Returns us first Truthy and last falsy value just
            opposite the AND operator which returns first falsy and last
            truthy value
*/

/*
    Remember that All truthy and falsy values are same as we discuss in 
    the AND Operator case.
*/

function App() {
  const firstName = "Shahnawaaz";
  const LastName = "";
  return (
    <>
      <h1>Welcome {LastName || firstName}</h1>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
