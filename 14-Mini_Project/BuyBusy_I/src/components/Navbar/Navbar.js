//* Packages
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

//* Internal Modules
import styles from "./navbar.module.css";

//* Images
import cart from "../../data/download.png";
import order from "../../data/download (1).png";
import user from "../../data/download (2).png";
import home from "../../data/download (3).png";
import { FaRectangleXmark, FaBars } from "react-icons/fa6";
import useLocalStorageForUser from "../../hooks/localstorage";

function Navbar() {
  const localStorage = useLocalStorageForUser();
  const [navListVisible, setNavListVisiblity] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getUser() ? true : false
  );

  function handleUserFeature() {
    setNavListVisiblity(false);
  }

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 700) {
        setNavListVisiblity(false);
      }
    });
    setUserLoggedIn(localStorage.getUser() ? true : false);
  });
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.start}>
          <NavLink to="/">Buy Busy</NavLink>
        </div>
        <div className={styles.end}>
          <ul className={styles.horizontalList}>
            <li>
              <NavLink to="/">
                <div className={styles.navItem}>
                  <img src={home} alt="home" className={styles.logo} />
                  <span className={styles.navText}>Home</span>
                </div>
              </NavLink>
            </li>
            {userLoggedIn ? (
              <>
                <li>
                  <NavLink to="orders">
                    <div className={styles.navItem}>
                      <img src={order} alt="order" className={styles.logo} />
                      <span className={styles.navText}>My Orders</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="cart">
                    <div className={styles.navItem}>
                      <img src={cart} alt="cart" className={styles.logo} />
                      <span className={styles.navText}>Cart</span>
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
            <li>
              <NavLink to={userLoggedIn ? "/users/signout" : "/users/signin"}>
                <div className={styles.navItem}>
                  <img src={user} alt="user" className={styles.logo} />
                  <span className={styles.navText}>
                    {localStorage.getUser() ? "Signout" : "Signin"}
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={styles.navListIcon}
          onClick={() => setNavListVisiblity(!navListVisible)}
        >
          {navListVisible ? (
            <FaRectangleXmark
              style={{ color: "red", height: 105 + "%", width: 105 + "%" }}
            />
          ) : (
            <FaBars
              style={{ color: "#7064e5", height: 100 + "%", width: 100 + "%" }}
            />
          )}
          {/* <img
            src={navListVisible ? closeIcon : colorHamburger}
            alt="hamburger-icon"
          /> */}
        </div>
        <div
          className={styles.navList}
          style={navListVisible ? { display: "block" } : { display: "none" }}
          id="nav-list"
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {userLoggedIn ? (
              <>
                <li>
                  <NavLink to="orders">My Order</NavLink>
                </li>
                <li>
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </>
            ) : (
              ""
            )}

            <li onClick={handleUserFeature}>
              <NavLink
                to={localStorage.getUser() ? "/users/signout" : "/users/signin"}
              >
                {localStorage.getUser() ? "Signout" : "Signin"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
