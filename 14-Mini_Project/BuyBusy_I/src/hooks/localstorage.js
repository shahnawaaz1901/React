function useLocalStorageForUser() {
  function setUser(user) {
    localStorage.setItem("userEmail", user.email);
  }
  function getUser() {
    return localStorage.getItem("userEmail");
  }

  function resetUser() {
    localStorage.setItem("userEmail", "");
  }

  return { setUser, getUser, resetUser };
}

export default useLocalStorageForUser;
