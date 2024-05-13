import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  localStorage.setItem("userInfo", "");
  navigate("/");
}

export default SignOut;
