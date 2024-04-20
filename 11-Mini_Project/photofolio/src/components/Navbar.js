//* Internal Modules
import styles from "./navbar.module.css";
import navLogo from "../images/logo.png";
function NavBar(props) {
  const { dispatch } = props;
  return (
    <>
      <nav className={styles.navContainer}>
        <div
          className={styles.logo}
          onClick={() => dispatch({ type: "albums" })}
        >
          <div className={styles.image}>
            <img src={navLogo} alt="logo" />
          </div>
          <div className={styles.name}>PhotoFolio</div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
