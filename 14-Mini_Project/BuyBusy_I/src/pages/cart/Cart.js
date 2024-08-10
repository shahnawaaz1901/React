import { useEffect, useState } from "react";
import styles from "./cart.module.css";
import useLocalStorageForUser from "../../hooks/localstorage";
import {
  query,
  where,
  getDocs,
  collection,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import db from "../../config/firebase";
import CartItem from "../../components/cartItem/CartItem";

function Cart() {
  const { getUser } = useLocalStorageForUser();
  const [cartTotal, setCartTotal] = useState(0);
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

  async function increaseCartItem(item) {
    try {
      const documentReference = doc(db, "cart", item.id);
      await setDoc(documentReference, { ...item, qty: ++item.qty });
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  }
  async function decreaseCartItem(item) {
    try {
      if (item.qty <= 1) {
        return;
      }
      const documentReference = doc(db, "cart", item.id);
      await setDoc(documentReference, { ...item, qty: --item.qty });
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromCart(item) {
    try {
      const documentReference = doc(db, "cart", item.id);
      await deleteDoc(documentReference);
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCartItems();
  }, []);

  function calculateCartTotal() {
    const total = cartItems.reduce((acc, value) => {
      return acc + value.qty * value.price;
    }, 0);
    setCartTotal(total);
  }

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartPriceContainer}>
        <div className={styles.priceContainer}>
          <span>Total Price : &nbsp;</span>
          <span>&#8377;{cartTotal}/-</span>
        </div>
        <div className={styles.purchaseBtn}>
          <button>Purchase</button>
        </div>
      </div>
      <div className={styles.cartItemsContainer}>
        {cartItems.map((item, index) => (
          <CartItem
            item={item}
            key={index}
            increaseCartItem={increaseCartItem}
            decreaseCartItem={decreaseCartItem}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}
export default Cart;
