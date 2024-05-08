import { useNavigate } from "react-router-dom";
function SignOut() {
  const navigate = useNavigate();
  localStorage.setItem("userInfo", null);
  navigate("/");
}
export default SignOut;
