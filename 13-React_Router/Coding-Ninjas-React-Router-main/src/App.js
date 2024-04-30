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
import Page404 from "./pages/misc/Page404/Page404";
import Chapter from "./pages/app/chapter/Chapter";
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
      errorElement={<Page404 />}
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
                  element={<Details />}
                  /*
                  HowEver we can do this type so that learn is also the children
                  of course page but i think that learn is different so that we
                  create a different path of learn outside the courses path so 
                  that courses and learn can be different two paths so for this
                  we create learn path outside the children of courses path, this
                  path only for rendering the courseDetails of the page
                  children={
                    <>
                      <Route index={true} element={<Details />} />
                      <Route path="learn" element={<Learn />} />
                    </>
                  }*/
                />
              </>
            }
          />
          <Route
            path="learn"
            children={
              <>
                <Route
                  path=":courseId"
                  element={<Learn />}
                  children={
                    <>
                      <Route path=":chapterId" element={<Chapter />} />
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
