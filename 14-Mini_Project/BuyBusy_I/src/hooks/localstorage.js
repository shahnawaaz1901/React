import { useEffect, useState } from "react";

function useLocalStorageForUser() {
  const { user, setUser } = useState(null);

  useEffect(() => {
    const userInformation = localStorage.getItem("userInformation");
    if (userInformation) {
      setUser(userInformation);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userInformation", user);
  }, [user]);

  return { user, setUser };
}

export default useLocalStorageForUser;
