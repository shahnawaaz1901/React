import { useUserValue } from "./userValue";

function useLocalStorageForUser() {
  const { setUserLoggedIn } = useUserValue();

  function setUser(user) {
    setUserLoggedIn(true);
    localStorage.setItem("userEmail", user.email);
  }
  function getUser() {
    return localStorage.getItem("userEmail");
  }

  function resetUser() {
    setUserLoggedIn(false);
    localStorage.setItem("userEmail", "");
  }

  return { setUser, getUser, resetUser };
}

export default useLocalStorageForUser;
