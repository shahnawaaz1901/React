import React from "react";
import styles from "../styles/Total.module.css";
import TotalContext from "../contexts/total.context";
import { useContext } from "react";
import ItemContext from "../contexts/item.context";
function Navbar() {
  const {total, setTotal} = useContext(TotalContext);
  const {item, setItem} = useContext(ItemContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
