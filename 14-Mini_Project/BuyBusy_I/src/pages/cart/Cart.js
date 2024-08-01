import { useState } from "react";
import styles from "./cart.module.css";
function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartPriceContainer}>
        <div className={styles.priceContainer}>
          <div>Total Price : &nbsp;</div>
          <div>&#8377;{totalPrice}/-</div>
        </div>
        <div className={styles.purchaseBtn}></div>
      </div>
      <div className={styles.cartItemsContainer}></div>
    </div>
  );
}
export default Cart;
