import styles from "./product.module.css";
function Product() {
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img
            src="https://m.media-amazon.com/images/I/41p7Iq8lLyL.jpg"
            alt="Product Img"
          />
        </div>
        <div className={styles.aboutProduct}>
          <div className={styles.name}>Weekender Travel Backpack</div>
          <div className={styles.about}>
            FUR JADEN 40L Weekender Travel Laptop Backpack with Anti Theft
            Pocket, Organizer, 15.6 Inch Padded Laptop Sleeve and Dual Handles
          </div>
        </div>
        <div className={styles.productPrice}>Price : &nbsp; &#x20B9; 1999</div>
        <div className={styles.productCartBtn}>Add to Cart</div>
      </div>
    </>
  );
}
export default Product;
