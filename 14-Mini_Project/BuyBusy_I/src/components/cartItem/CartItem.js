import { useState } from "react";
import styles from "./cartItem.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { toast } from "react-toastify";

function CartItem({
  item,
  increaseCartItem,
  decreaseCartItem,
  removeFromCart,
}) {
  const { title, about, price, qty, imageURL } = item;
  const [removeCartBtn, setRemoveCartBtn] = useState("Remove From Cart");

  async function handleRemoveBtnClick(item) {
    try {
      setRemoveCartBtn("Removing....");
      await removeFromCart(item);
      setRemoveCartBtn("Remove From Cart");
      toast.success("Item Removed Successfully !!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImageContainer}>
        <img src={`${imageURL}`} alt="Product Img" />
      </div>
      <div className={styles.aboutItem}>
        <div className={styles.itemName}>{title}</div>
        <div className={styles.itemDesc}>{about}</div>
      </div>
      <div className={styles.itemPriceQuantityContainer}>
        <div className={styles.itemPrice}>Price : &nbsp;&#x20B9; {price}</div>
        <div className={styles.quantityContainer}>
          <div onClick={() => increaseCartItem(item)}>
            <CiCirclePlus className={styles.itemQuantityChangeBtn} />
          </div>
          <div className={styles.quantity}>{qty}</div>
          <div onClick={() => decreaseCartItem(item)}>
            <CiCircleMinus className={styles.itemQuantityChangeBtn} />
          </div>
        </div>
      </div>
      <div
        className={styles.itemRemoveBtn}
        onClick={() => handleRemoveBtnClick(item)}
      >
        {removeCartBtn}
      </div>
    </div>
  );
}
export default CartItem;
