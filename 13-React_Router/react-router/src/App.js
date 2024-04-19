import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
//* for Creating the Routes
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";

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

  /* 
    Storing the WhatEver Return value inside the routerPath variable 
    Here we define and create the routes at the same time, how ever we
    can first define the routes and the create the routes seprately
  */
  // const routerPath = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/about", element: <About /> },
  //   { path: "/items", element: <Items /> },
  // ]);

  /*
    However we have another way to provide the routes where first we
    define the routes and then we can provide the routes by using the
    createBrowserRouter, for defining the Routes and providing we need 
    to use createRoutesFromElement and Route which is the Component which
    helps us to providing the Routes 
  */

  /*
    CreateRoutesFromElements function takes JSX as argument in which we
    need to return Route component which Route component takes props
    path which is nothing but string which specify the path and another
    is element which is nothing but the component which we want to render
    for the path howEver because we use empty fragments we can add multiple
    routes so that createRoutesFromElements returns Routes which we can
    store in variable and by using the React Routes we can specify and
    render the components for a specific routes, Route is nothing but a
    component which comes along with react-router-dom internally working
    is similar just like we define and create the routes simantanously,
    This is method is called predefine routes where we define the routes
    before the creation
  */
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/items" element={<Items />} />
    </>
  );
  const router = createBrowserRouter(routes);
  return (
    <>
      {/* 
        Router provider is nothing but a Component which comes from react-router-dom
        which takes a props "router" which is nothing but instance which is return 
        when we create the routes for our application
      */}
      {/* 
        Write by define and Creating routes same time by using the 
        createBrowserRouter 
        
        <RouterProvider router={routerPath} /> 
      */}
      <RouterProvider router={router} />
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
