import { Link, Outlet } from "react-router-dom";
function Navbar(props) {
  const { setPage } = props;
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
      <div className="nav">
        <h4>
          <Link to="/">HOME</Link>
        </h4>
        <h4>
          <Link to="/about">ABOUT</Link>
        </h4>
        <h4>
          <Link to="/items">ITEMS</Link>
        </h4>
      </div>
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
      <Outlet />
    </>
  );
}

export default Navbar;
