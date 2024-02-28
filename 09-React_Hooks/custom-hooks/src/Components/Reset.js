import { useState, useEffect } from "react";

export default function Reset() {
  const [email, setEmail] = useState("");

  /* 
    If use has typed the email for login then we need to store the email
    inside the localStorage which we done inside the login component now 
    we need to retrieved that email from the localStorage, again it's a
    browser API so we need to perform a side effect which we can performed 
    inside the useEffect Hook, and because we want to only render the email
    if email is present in the Storage and only and only in the case of first
    render
  */
  //* For Getting email Value from the localStorage
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  //* For Setting the email Value in the localStorage
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <>
      <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
