import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Learn from "./pages/app/learn/Learn";
function App() {
  /* 
    If we want to create routes from Elements we can create by importing a 
    function createRouterFromElements in which we pass the JSX which contains
    the Route component which takes the two props mainly path and element and
    another one is children component which also takes the JSX 
  */
  const routes = createRoutesFromElements(
    <Route
      path="/"
      element={<Nav />}
      children={
        <>
          <Route index={true} element={<Hero />} />
          <Route
            path="/courses"
            children={
              <>
                <Route index={true} element={<Courses />} />
                <Route
                  path=":courseId"
                  children={
                    <>
                      <Route index={true} element={<Details />} />
                      <Route path="learn" element={<Learn />} />
                    </>
                  }
                />
              </>
            }
          />
        </>
      }
    />
  );
  /*
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        { path: "courses", element: <Courses /> },
      ],
    },
  ]);
  */
  const router = createBrowserRouter(routes);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
