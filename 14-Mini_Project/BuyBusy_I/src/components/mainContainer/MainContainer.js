import { useProductValue } from "../../hooks/productValue";
import Filter from "../../components/filter/Filter";
import Product from "../product/Product";
import styles from "./mainContainer.module.css";
function MainContainer() {
  const { productList } = useProductValue();

  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.productListContainer}>
        {productList.map((value, index) => (
          <Product
            key={index}
            title={value.title}
            imageURL={value.imageURL}
            about={value.about}
            price={value.price}
          />
        ))}
        {/* <div className={styles.productContainer}></div>
        <div className={styles.productContainer}></div>
        <div className={styles.productContainer}></div> */}
      </div>
    </div>
  );
}
export default MainContainer;
