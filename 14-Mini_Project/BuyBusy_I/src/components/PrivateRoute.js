import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserValue } from "../hooks/userValue";

function PrivateRoute(props) {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserValue();
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/unAuth");
    }
  });
  return <>{isUserLoggedIn ? props.children : ""}</>;
}

export default PrivateRoute;
