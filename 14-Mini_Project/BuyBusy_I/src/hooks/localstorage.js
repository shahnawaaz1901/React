import { useUserValue } from "./userValue";

function useLocalStorageForUser() {
  const { setUserLoggedIn } = useUserValue();

  function setUser(userEmail) {
    setUserLoggedIn(true);
    localStorage.setItem("userEmail", userEmail);
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
