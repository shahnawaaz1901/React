// import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
//* for Creating the Routes
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Item from "./pages/ItemDetail";
// import { createRoutesFromElements } from "react-router-dom";
// import { Route } from "react-router-dom";

function App() {
  // const [currPage, setPage] = useState("home");
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
  /*
  const routes = createRoutesFromElements(
    <>
      {
        Define Navbar on "/" path so navbar can visible in the base
        URL
      }
      <Route
        path="/"
        element={<Navbar />}
        children={
          <>
            { 
              Because we need our home page in "/" path which is similer 
              to navbar path so we can skip path attribute and instead of 
              path attribute we can pass index attribute and value of index 
              attribute is true and because we put all the page component
              inside the children attribute of navbar component so for 
              rendering the pages component we need to render the outlet
              component which is equal to the page component which we put
              inside the children attribute 
            }
            {/* <Route path="/" element={<Home />} /> }
            <Route index={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/items" element={<Items />} />
          </>
        }
      />
      ,
    </>
  );
  const router = createBrowserRouter(routes);
  */
  //* Another Way to Write
  const router = createBrowserRouter([
    /*
      In react-router-dom we have two types of paths :
      1. Absolute Path
      2. Relative Path

      1. Let's first Understand the Absolute path, we create first a default route
      for the navbar and inside the navbar all the children come under the navbar
      but we noticed one thing that is path which we created as children under the
      navbar first we write slash "/" but why we need to write slash because here 
      we give the absolute path not the relative path, so in absolute path first we
      write the parent path after that we write whatever path we want to give that's
      we need to write the "/" slash before the path in children path property for
      Example for Navbar we write the path /root so for children we need to write
      path like this :
      in items : /root/items
      in about : /root/about

      {
      path: "/root",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/root/items", element: <Items /> },
        { path: "/root/about", element: <About /> },
      ],
      },

      From this Example we understand what is the limitations of the Absolute Path
      for Absolute Paths we need to give the full path instead of just one path which
      directly related to the component, So always in nested routing use relative
      paths instead of absolute path

      so for preventing this we need to use the relative path
      
      2. Let's understand how to use the relative path, for relative path we need
      to exclude the slash "/" in the children path how ever we can use the slash 
      "/" in the parent because parent can be main page of the web page but children
      is redirected to the another page, given is the example of relative path
    */
    {
      path: "/",
      element: <Navbar />,
      children: [
        // { index: true, element: <Navbar /> },
        { index: true, element: <Home /> },
        {
          path: "items",
          children: [
            /*
              From items we have two paths one is /item and another one is 
              /items/:item means one is for list of items and another is for
              `the individual item 
            */
            {
              index: true,
              element: <Items />,
            },
            {
              path: ":itemId",
              element: <Item details={{ name: "Ashu", Age: 18 }} />,
            },
          ],
        },
        {
          /* 
            After Slash "/" we use the colon and just after the colon we write
            item which is called params, whatever we write after the colon that
            is created as variable in the component which we want to render and
            that variable we can access by the "useParams" hook.
          */
          /*
            If someone type "items/abcd" then in component when we access the param
            using the "useParams" hook we get the object which contain the key value
            pairs which key is whatEver we write after the colon, in our case we 
            write the "item" so item is the key and whatever use type after items
            in our case "abcd" is the value, so we get
            {item : "abcd"} from useParams() hook
          */

          /*
            Dynamic Routing : When We change the URL according to the some random
            path this is called dynamic routing, dynamic routing helps us to render
            multiple things by using the param from a single component, This is 
            called Dynamic Routing
          */
          /*
            The Objective of react router is the combining the path not the using
            the outlet and render the components as the children
          */
          path: "items/:item",
          element: <Item details={{ name: "Ashu", Age: 18 }} />,
        },
        { path: "about", element: <About /> },
      ],
    },
  ]);
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
      {/* 
        Because we need navbar in each and every page so instead
        of directly render navbar in each and every component and
        repeatedly write navbar component in each and every component
        we can use the nested routes which helps us to render a single
        component in multiple routes withOut repeatedly write the
        navbar component in each and every page component, However
        nested routes has many benefits like we can define parent child
        relationship by using the nested routes and we can create a 
        single route which redirect to the multiple components just through
        a single path just like this :

            /posts/viewPost
            /posts/viewPostLikes
            /posts/viewPostComments
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
