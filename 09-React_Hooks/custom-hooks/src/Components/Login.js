import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* 
    We Only Want to set the LocalStorage when our email state is changed, 
    so our second argument is the email inside the dependency array, this
    localStorage we can access inside inspect element and Application 
    storage to localStorage Section
  */

  /*
    One thing that we need to understand is if in a single component we 
    manipulate localStorage multiple times using different useEffect hooks 
    manipulate the localstorage by using getItem and setItem then we need 
    to write first useEffect hook of getting the item because if we set the 
    item before getting then it might be chance that we might be loose that
    local storage value, So that order of useEffect is Also Important
  */
  /*
    What Ever Work we do here to store email on localStorage and use it and 
    update it whenever user update the value we can achieve using the custom 
    Hooks because we need to be very careful while performing the sideEffect
    Because order of performing sideEffect is Very Important
  */
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <>
      <h1>Login to the Portal!</h1>
      <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted");
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
