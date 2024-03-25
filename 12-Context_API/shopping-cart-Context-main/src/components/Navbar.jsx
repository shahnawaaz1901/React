import React from "react";
import styles from "../styles/Navbar.module.css";
// import { useContext } from "react";
import { useValue } from "../contexts/item.context";

function Navbar() {
  // const {total } = useContext(ItemContext);
  // const {item} = useContext(ItemContext);
  const {total, item, resetValues, toggleCart} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonWrapper}><button className={styles.button} onClick={toggleCart}>Cart</button><button className={styles.button} onClick={resetValues}>Reset</button></div>
    </div>
  );
}

export default Navbar;
