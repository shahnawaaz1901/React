import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  localStorage.setItem("userInfo", "");
  useEffect(() => {
    navigate("/");
  });
  return <></>;
}

export default SignOut;
