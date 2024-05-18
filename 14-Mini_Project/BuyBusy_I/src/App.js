import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Grid } from "react-loader-spinner";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home/Home";
import SignOut from "./pages/signout/SignOut";
import UnAuthorizeAccess from "./components/unauthorize/UnAuthorize";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";

function App() {
  const [time, setTime] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: time ? (
            <Home />
          ) : (
            <Grid
              visible={true}
              height="60"
              width="60"
              color="#7064e5"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{
                display: "flex",
                height: 60 + "vh",
                width: 100 + "vw",
                justifyContent: "center",
                alignItems: "center",
              }}
              wrapperClass="grid-wrapper"
            />
          ),
        },
        {
          path: "users",
          element: "",
          children: [
            { path: "signin", element: <Signin /> },
            { path: "signup", element: <Signup /> },
            {
              path: "signout",
              element: <SignOut />,
            },
          ],
        },
        { path: "cart", element: <PrivateRoute></PrivateRoute> },
        { path: "orders", element: <PrivateRoute></PrivateRoute> },
      ],
    },
    { path: "unAuth", element: <UnAuthorizeAccess /> },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 2000);
  }, []);

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
