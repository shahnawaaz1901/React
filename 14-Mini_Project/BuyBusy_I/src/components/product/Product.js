import { useEffect, useState } from "react";
import styles from "./product.module.css";
function Product({ title, imageURL, about, price }) {
  const [cartBtnClick, setCartBtnClick] = useState(false);

  useEffect(() => {
    if (cartBtnClick) {
      setTimeout(() => {
        setCartBtnClick(false);
      }, 3000);
    }
  }, [cartBtnClick]);
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img src={`${imageURL}`} alt="Product Img" />
        </div>
        <div className={styles.aboutProduct}>
          <div className={styles.name}>{title}</div>
          <div className={styles.about}>{about}</div>
        </div>
        <div className={styles.productPrice}>
          Price : &nbsp; &#x20B9; {price}
        </div>
        <div
          className={styles.productCartBtn}
          onClick={() => setCartBtnClick(true)}
        >
          {cartBtnClick ? (
            <span className={styles.loading}>
              .&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.
            </span>
          ) : (
            <span>Add to Cart</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
