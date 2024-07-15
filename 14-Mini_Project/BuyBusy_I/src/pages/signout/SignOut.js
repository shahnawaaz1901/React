import { useNavigate } from "react-router-dom";
import useLocalStorageForUser from "../../hooks/localstorage";
import { useEffect } from "react";
import { useUserValue } from "../../hooks/userValue";

function SignOut() {
  const navigate = useNavigate();
  const localStorage = useLocalStorageForUser();
  const { setUserLoggedIn } = useUserValue();
  useEffect(() => {
    localStorage.resetUser();
    setUserLoggedIn(false);
    navigate("/");
  });
}

export default SignOut;
