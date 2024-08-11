import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserProvider(props) {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setUserLoggedIn(localStorage.getItem("userEmail") ? true : false);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ isUserLoggedIn, setUserLoggedIn }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider;
