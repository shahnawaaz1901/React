import Filter from "../../components/filter/Filter";
import Product from "../product/Product";
import styles from "./mainContainer.module.css";
function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.productListContainer}>
        <Product />
        <Product />
        <Product />
        <Product />
        <div className={styles.productContainer}></div>
        <div className={styles.productContainer}></div>
        <div className={styles.productContainer}></div>
      </div>
    </div>
  );
}
export default MainContainer;
