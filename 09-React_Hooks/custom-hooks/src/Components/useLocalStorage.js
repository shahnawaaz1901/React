import { useState, useEffect } from "react";
export default function useLocalStorage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  //* For Setting the email Value in the localStorage
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  /* 
        We Return state and state function as in the form of array however we 
        can return the both things with using of object like this :

        return {email, setEmail}

        But because our all default hooks returns by using the array that's we 
        return the state email and setState setEmail function with using the array
    */
  return [email, setEmail];
}
