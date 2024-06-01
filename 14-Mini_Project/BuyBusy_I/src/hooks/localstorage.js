function useLocalStorageForUser() {
  function setUser(key, value) {
    localStorage.setItem(key, value);
  }
  function getUser() {
    return localStorage.getItem("user");
  }

  function resetUser() {
    localStorage.setItem("user", "");
  }

  return { setUser, getUser, resetUser };
}

export default useLocalStorageForUser;
