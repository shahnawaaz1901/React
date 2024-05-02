//* Packages
import { NavLink } from "react-router-dom";

//* Internal Modules
import styles from "./navbar.module.css";

//* Images
import cart from "../data/download.png";
import order from "../data/download (1).png";
import user from "../data/download (2).png";
import home from "../data/download (3).png";
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.start}>
        <NavLink to="/">Buy Busy</NavLink>
      </div>
      <div className={styles.end}>
        <ul>
          <li>
            <NavLink to="/">
              <div className={styles.navItem}>
                <img src={home} alt="home" className={styles.logo} />
                <span className={styles.navText}>Home</span>
              </div>
            </NavLink>
          </li>
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
          <li>
            <NavLink to="user">
              <div className={styles.navItem}>
                <img src={user} alt="user" className={styles.logo} />
                <span className={styles.navText}>Signin</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
