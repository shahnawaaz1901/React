import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageForUser from "../../hooks/localstorage";

function SignOut() {
  const navigate = useNavigate();
  const localStorage = useLocalStorageForUser();
  localStorage.resetUser();
  useEffect(() => {
    navigate("/");
  });
}

export default SignOut;
