import { useEffect, useState } from "react";
import styles from "./cart.module.css";
import useLocalStorageForUser from "../../hooks/localstorage";
import { query, where, getDocs, collection } from "firebase/firestore";
import db from "../../config/firebase";
import CartItem from "../../components/cartItem/CartItem";

function Cart() {
  const { getUser } = useLocalStorageForUser();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  async function fetchCartItems() {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "cart"), where("user", "==", `${getUser()}`))
      );
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setCartItems(items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartPriceContainer}>
        <div className={styles.priceContainer}>
          <span>Total Price : &nbsp;</span>
          <span>&#8377;{totalPrice || 1000000}/-</span>
        </div>
        <div className={styles.purchaseBtn}>
          <button>Purchase</button>
        </div>
      </div>
      <div className={styles.cartItemsContainer}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}
export default Cart;
