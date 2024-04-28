import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.start}>
        <NavLink to="/">Buy Busy</NavLink>
      </div>
      <div className={styles.end}>
        <div className={styles.navItem}>Home</div>
        <div className={styles.navItem}>My Orders</div>
        <div className={styles.navItem}>Cart</div>
        <div className={styles.navItem}>Login</div>
      </div>
    </div>
  );
}
export default Navbar;
