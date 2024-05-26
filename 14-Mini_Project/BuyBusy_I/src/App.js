import "./app.css";
//* ForAnother way to Provide Routing
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home/Home";
import SignOut from "./pages/signout/SignOut";
import UnAuthorizeAccess from "./components/unauthorize/UnAuthorize";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import CustomProvider from "./context/productContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  /* One Way to Provide Routing
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
  )
*/
  return (
    <div className="app-container">
      {/* <RouterProvider router={router} /> */}
      <CustomProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navbar />}
              children={
                <>
                  <Route index={true} element={<Home />} />
                  <Route
                    path="/users"
                    children={
                      <>
                        <Route path="signin" element={<Signin />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="signout" element={<SignOut />} />
                      </>
                    }
                  />
                  <Route path="cart" element={<PrivateRoute></PrivateRoute>} />
                  <Route
                    path="my-orders"
                    element={<PrivateRoute></PrivateRoute>}
                  />
                </>
              }
            />
            <Route path="unAuth" element={<UnAuthorizeAccess />} />
            {/* <Route />
          <Route />
          <Route /> */}
          </Routes>
        </BrowserRouter>
      </CustomProvider>
    </div>
  );
}

export default App;
