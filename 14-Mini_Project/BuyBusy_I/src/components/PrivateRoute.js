import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function PrivateRoute(props) {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    if (!userInfo) {
      navigate("/unAuth");
    }
  }, []);
  return <>{userInfo ? props.children : ""}</>;
}

export default PrivateRoute;
