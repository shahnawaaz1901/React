import UnAuthorized from "./Navbar";
function PrivateRoute(props) {
  const userInfo = localStorage.getItem("userInfo");
  return <>{userInfo ? props.children : <UnAuthorized />}</>;
}

export default PrivateRoute;
