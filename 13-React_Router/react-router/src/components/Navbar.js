import { NavLink, Outlet } from "react-router-dom";
function Navbar(props) {
  // const { setPage } = props;
  return (
    <>
      {/* 
        In React we can link pages by using the anchor tag but the 
        problem when we use the anchor tag every time we change the
        path our page is refreshed but why because we use the React
        and we want to create a single page application but why we 
        refreshed our web page in single page application that's not
        single page that's multi page application so for this anchor
        tag is not a good approach, now question is if we can't use the
        anchor tag then what option we have, we have a component from
        "react-router-dom" name Link, in which have an attribute or we
        can say prop called "to" which takes the path in the form of 
        string just like the href attribute in anchor tag, we can specify
        the path in "to" attribute and we can switch pages withOut re-
        load the page again and again
      */}
      {/* 
        Because we want to Make Some Changes when we have on current Link so 
        that instead of using Link we use the NavLink Component, which takes
        a function in style attribute where we can made styling when link is
        active
      */}
      {/* <div className="nav">
        <h4>
          <Link to="/">HOME</Link>
        </h4>
        <h4>
          <Link to="/about">ABOUT</Link>
        </h4>
        <h4>
          <Link to="/items">ITEMS</Link>
        </h4>
      </div> */}
      {/* <div className="nav">
        <h4>
          <Link to="/">HOME</Link>
        </h4>
        <h4>
          <Link to="/about">ABOUT</Link>
        </h4>
        <h4>
          <Link to="/items">ITEMS</Link>
        </h4>
      </div> */}
      {/* 
        Instead of using the Link Component we need to use the NavLink Component 
        Because NavLink component takes a function which takes an object as argument
        in which a property isActive is exist which became true when we click on 
        Link and according to isActive we can modify some styling, so that for 
        navigation we use the NavLink Component 
      */}
      {/* 
        Here we use the relative path instead of absolute so that we need to remove
        the slash in the to attribute and just add the direct path withOut using the
        slash at the start, how ever we can use the slash "/" in the middle in the
        case of nesting routes
      */}
      <div className="nav">
        <h4>
          <NavLink
            to="/"
            style={({ isActive }) =>
              //* we Change the color is link is active
              isActive ? { color: "blue" } : { color: undefined }
            }
          >
            HOME
          </NavLink>
        </h4>
        <h4>
          <NavLink
            to="about"
            style={({ isActive }) =>
              isActive ? { color: "blue" } : { color: undefined }
            }
          >
            ABOUT
          </NavLink>
        </h4>
        <h4>
          <NavLink
            to="items"
            style={({ isActive }) =>
              isActive ? { color: "blue" } : { color: undefined }
            }
          >
            ITEMS
          </NavLink>
        </h4>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
