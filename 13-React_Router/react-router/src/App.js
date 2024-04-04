import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
//* for Creating the Routes
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  const [currPage, setPage] = useState("home");
  /* 
    createBrowserRouter takes array of objects in which objects is nothing 
    but individual routes, and each object must have two keys one is path
    and another one is element means for this path what JSX we want to return
    or we can return a Component, createBrowserRouter helps us to create the
    routes for our application but for provide the routes to the app we need
    to use the RouterProvider which helps us to provide the routes to our app
  */

  /* Storing the WhatEver Return value inside the routerPath variable */
  const routerPath = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/items", element: <Items /> },
  ]);
  return (
    <>
      {/* 
        Router provider is nothing but a Component which comes from react-router-dom
        which takes a props "router" which is nothing but instance which is return 
        when we create the routes for our application
      */}
      <RouterProvider router={routerPath} />
      {/* <Navbar setPage={setPage} />
      {currPage === "home" && <Home />}
      {currPage === "about" && <About />}
      {currPage === "items" && <Items />} */}
    </>
  );
}

/* 
  A URL contains the two things one is base URL and another one is path :

  www.codingninjas.com/courses

  In Above example 
    Base URL : www.codingninjas.com
    Path : /courses
*/

export default App;
