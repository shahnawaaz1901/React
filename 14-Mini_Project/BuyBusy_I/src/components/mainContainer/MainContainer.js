import Filter from "../../components/filter/Filter";
import styles from "./mainContainer.module.css";
function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.productContainer}></div>
    </div>
  );
}
export default MainContainer;
