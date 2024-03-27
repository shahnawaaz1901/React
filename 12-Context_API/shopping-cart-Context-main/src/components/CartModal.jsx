import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../contexts/item.context";

function CartModal() {
  const {cart,resetCart,toggleCart} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={resetCart}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((eachItem)=> <div className={styles.cartCard} key={eachItem.id}>
          <h1>{eachItem.name}</h1>
          <h3>X{eachItem.qty}</h3>
          <h3>X{eachItem.qty * eachItem.price}</h3>
        </div>)}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total : {cart.length}</div>
        <div className={styles.totalPrice}>$Price : {cart.reduce((acc, curr)=> acc + curr.qty * curr.price,0)}</div>
      </div>
    </div>
  );
}

export default CartModal;
