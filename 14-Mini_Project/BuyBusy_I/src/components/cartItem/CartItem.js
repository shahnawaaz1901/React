import { useState } from "react";
import styles from "./cartItem.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function CartItem() {
  const [removeCartBtn, setRemoveCartBtn] = useState("Remove From Cart");
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImageContainer}>
        <img
          src={`https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg`}
          alt="Product Img"
        />
      </div>
      <div className={styles.aboutItem}>
        <div className={styles.itemName}>
          Some Name fjnfkjdifdfhewiofew fewfb ewfuuwiiuwee{" "}
        </div>
        <div className={styles.itemDesc}>
          Some Item Description this is dsknfsdnfndsfndskjfjdsfndsf dsf kjdsf
          jkdsfnkjdsnfdsnf dsfkjdsnfkjdsnfkjdsnfnsdf njf kjdsnfdsnfjksdfnsdn
          fdsjfdsnfndskjfnk
        </div>
      </div>
      <div className={styles.itemPriceQuantityContainer}>
        <div className={styles.itemPrice}>Price : &nbsp;&#x20B9; 10000</div>
        <div className={styles.quantityContainer}>
          <div>
            <CiCirclePlus className={styles.itemQuantityChangeBtn} />
          </div>
          <div className={styles.quantity}>2</div>
          <div>
            <CiCircleMinus className={styles.itemQuantityChangeBtn} />
          </div>
        </div>
      </div>
      <div className={styles.itemRemoveBtn}>{removeCartBtn}</div>
    </div>
  );
}
export default CartItem;
