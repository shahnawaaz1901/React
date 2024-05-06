import UnAuthorized from "./navbar/Navbar";
function PrivateRoute(props) {
  const userInfo = localStorage.getItem("userInfo");
  return <>{userInfo ? props.children : <UnAuthorized />}</>;
}

export default PrivateRoute;
