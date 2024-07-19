//* Packages
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//* Internal Modules
import styles from "./navbar.module.css";
import confirm from "../../utilities/Swal";
//* Images
import cart from "../../data/download.png";
import order from "../../data/download (1).png";
import user from "../../data/download (2).png";
import home from "../../data/download (3).png";
import { FaRectangleXmark, FaBars } from "react-icons/fa6";
import useLocalStorageForUser from "../../hooks/localstorage";
import { useUserValue } from "../../hooks/userValue";

function Navbar() {
  const localStorage = useLocalStorageForUser();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserValue();
  const [navListVisible, setNavListVisiblity] = useState(false);

  async function handleLogoutClick() {
    if (isUserLoggedIn) {
      const confirmByUser = await confirm();
      if (confirmByUser) {
        hideNav();
        navigate("/users/signout");
      }
    }
  }

  function hideNav() {
    setNavListVisiblity(false);
  }

  function showNav() {
    setNavListVisiblity(true);
  }

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 700) {
        setNavListVisiblity(false);
      }
    });
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
            {isUserLoggedIn ? (
              <>
                <li>
                  <NavLink to="my-orders">
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
              <NavLink to={isUserLoggedIn ? "#" : "/users/signin"}>
                <div className={styles.navItem} onClick={handleLogoutClick}>
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
          onClick={() => (navListVisible ? hideNav() : showNav())}
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
        </div>
        <div
          className={styles.navList}
          style={navListVisible ? { display: "block" } : { display: "none" }}
          id="nav-list"
          onClick={hideNav}
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {isUserLoggedIn ? (
              <>
                <li>
                  <NavLink to="my-orders">My Order</NavLink>
                </li>
                <li>
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </>
            ) : (
              ""
            )}

            <li onClick={handleLogoutClick}>
              <NavLink to={localStorage.getUser() ? "/" : "/users/signin"}>
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
