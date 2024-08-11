import { useState } from "react";
import styles from "./product.module.css";

function Product({ productDetail, addedToCart }) {
  const [cartBtnValue, setCartBtnValue] = useState("Add to Cart");
  const { title, imageURL, about, price, id } = productDetail;

  async function handleCartBtnClick(product) {
    setCartBtnValue("Adding....");
    await addedToCart(product);
    setCartBtnValue("Add to Cart");
  }
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageContainer}>
        <img src={`${imageURL}`} alt="Product Img" />
      </div>
      <div className={styles.aboutProduct}>
        <div className={styles.name}>{title}</div>
        <div className={styles.about}>{about}</div>
      </div>
      <div className={styles.productPrice}>Price : &nbsp; &#x20B9; {price}</div>
      <div
        className={styles.productCartBtn}
        onClick={() =>
          handleCartBtnClick({ productId: id, title, imageURL, price, about })
        }
      >
        {cartBtnValue}
      </div>
    </div>
  );
}

export default Product;
