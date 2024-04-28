import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: "" },
        { path: "signin", element: "" },
        { path: "signup", element: "" },
        { path: "cart", element: "" },
        { path: "my-orders", element: "" },
      ],
    },
  ]);
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
