import Filter from "../../components/filter/Filter";
import styles from "./mainContainer.module.css";
function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.productListContainer}>
        <div className={styles.productContainer}>
          <div className={styles.productImageContainer}>
            <img
              src="https://m.media-amazon.com/images/I/81HEC-PJkiL._AC_UY1100_.jpg"
              alt="Product Img"
            />
          </div>
          <div className={styles.aboutProduct}>
            <div className={styles.name}>Sandisk SSD</div>
            <div className={styles.about}>
              512GB SSD With One of the fastest Technology Google is y one idsnf
              the favourita btamd inf hone turjejknejrnekeGoogle is jtemo
              ofnofefns gfgflgmlfmgfgfigfgkfkn jfkjfngfkjgnfgnjnfdgnfdk
            </div>
          </div>
          <div className={styles.productPrice}>
            Price : &nbsp; &#x20B9; 10000
          </div>
          <div className={styles.productCartBtn}>Add to Cart</div>
        </div>
        <div className={styles.productContainer}></div>
        <div className={styles.productContainer}></div>
        <div className={styles.productContainer}></div>
      </div>
    </div>
  );
}
export default MainContainer;
