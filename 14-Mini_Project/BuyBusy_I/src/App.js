import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home/Home";
import SignOut from "./pages/signout/SignOut";
import UnAuthorizeAccess from "./components/unauthorize/UnAuthorize";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import CustomProvider from "./context/productContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: (
            <CustomProvider>
              <Home />
            </CustomProvider>
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

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
