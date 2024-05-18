import { useEffect, useState } from "react";
import styles from "./filter.module.css";
import { useForm, FormProvider } from "react-hook-form";
import InputCheckBox from "../inputFields/checkBox";
import InputRange from "../inputFields/range";
function Filter() {
  const [price, setPrice] = useState(0);
  const methods = useForm();
  const watchedData = methods.watch();

  function handleFilterChange(data) {
    console.log(data);
    setPrice(data.priceRange);
  }
  useEffect(() => {
    handleFilterChange(watchedData);
  }, [watchedData]);
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.filterPrice}>
        <span>Price : </span>
        <span>{price}</span>
      </div>
      <FormProvider {...methods}>
        <form>
          <div className={styles.filterRange}>
            <InputRange
              name="priceRange"
              price={price}
              min={0}
              max={100000}
              step={10}
            />
          </div>
          <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle}>Category</div>
            <div className={styles.category}>
              <span>
                <InputCheckBox name="category" id="Men Clothing" />
              </span>
              <label htmlFor="Men Clothing">Men's Clothing</label>
            </div>
            <div className={styles.category}>
              <span>
                <InputCheckBox name="category" id="Women Clothing" />
              </span>
              <label htmlFor="Women Clothing">Women's Clothing</label>
            </div>
            <div className={styles.category}>
              <span>
                <InputCheckBox name="caegory" id="jwellery" />
              </span>
              <label htmlFor="jwellery">Jwellery</label>
            </div>
            <div className={styles.category}>
              <span>
                <InputCheckBox name="category" id="electronics" />
              </span>
              <label htmlFor="electronics">Electronics</label>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
export default Filter;
