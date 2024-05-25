import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/"></a> */}
        <NavLink
          className="navbar-brand"
          to="/"
          style={({ isActive, isPending }) =>
            isActive ? { color: "blue" } : {}
          }
        >
          Utility Apps
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="todo"
              ></a> */}
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/todo"
                style={({ isActive, isPending }) =>
                  isActive ? { color: "blue" } : {}
                }
              >
                To Do
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="notes"
              ></a> */}
              <NavLink
                to="/notes"
                className="nav-link active"
                aria-current="page"
                style={({ isActive, isPending }) =>
                  isActive ? { color: "blue" } : {}
                }
              >
                Note
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
