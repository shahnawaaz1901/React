import styles from "./navbar.module.css";
import cart from "../data/download.png";
import order from "../data/download (1).png";
import user from "../data/download (2).png";
import home from "../data/download (3).png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.start}>
        <NavLink to="/">Buy Busy</NavLink>
      </div>
      <div className={styles.end}>
        <div className={styles.navItem}>
          <NavLink to="home">
            <div className={styles.logo}>
              <img src={home} alt="home" />
            </div>
            <div>Home</div>
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="orders">
            <div className={styles.logo}>
              <img src={order} alt="order" />
            </div>
            <div>My Orders</div>
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="cart">
            <div className={styles.logo}>
              <img src={cart} alt="cart" />
            </div>
            <div>Cart</div>
          </NavLink>
        </div>
        <div className={styles.navItem}>
          <NavLink to="user">
            <div className={styles.logo}>
              <img src={user} alt="user" />
            </div>
            <div>Signin</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
