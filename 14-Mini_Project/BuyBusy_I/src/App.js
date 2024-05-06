import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Grid } from "react-loader-spinner";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home/home";
function App() {
  const [time, setTime] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "users",
          element: "",
          children: [
            { path: "signin", children: "" },
            { path: "signup", element: "" },
            { path: "signout", element: <PrivateRoute></PrivateRoute> },
          ],
        },
        { path: "cart", element: <PrivateRoute></PrivateRoute> },
        { path: "my-orders", element: <PrivateRoute></PrivateRoute> },
      ],
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 10000);
  }, []);
  return (
    <div className="app-container">
      {time ? (
        <RouterProvider router={router} />
      ) : (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#7064e5"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{
            display: "flex",
            height: 80 + "vh",
            width: 100 + "vw",
            justifyContent: "center",
            alignItems: "center",
          }}
          wrapperClass="grid-wrapper"
        />
      )}
    </div>
  );
}

export default App;
