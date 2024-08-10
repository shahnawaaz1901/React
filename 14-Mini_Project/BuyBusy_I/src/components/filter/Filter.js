import { useEffect } from "react";
import styles from "./filter.module.css";
import { useForm, FormProvider } from "react-hook-form";
import InputCheckBox from "../inputFields/CheckBox";
import InputRange from "../inputFields/Range";
import useFilterValue from "../../hooks/filterValue";

function Filter() {
  const { filterData, setFilterData } = useFilterValue();
  const methods = useForm();
  const watchedData = methods.watch();

  function handleFilterChange(data) {
    let isDataSame = true;
    for (let i in data) {
      if (filterData[i] !== data[i]) {
        isDataSame = false;
        break;
      }
    }
    if (!isDataSame) {
      setFilterData(data);
    }
  }
  useEffect(() => {
    handleFilterChange(watchedData);
  }, [watchedData]);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.filterPrice}>
        <span>Price : </span>
        <span>{filterData.PriceRange || 500000}</span>
      </div>
      <FormProvider {...methods}>
        <form>
          <div className={styles.filterRange}>
            <InputRange
              name="PriceRange"
              price={filterData.PriceRange || 500000}
              min={0}
              max={500000}
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
                <InputCheckBox name="caegory" id="Jwellery" />
              </span>
              <label htmlFor="jwellery">Jwellery</label>
            </div>
            <div className={styles.category}>
              <span>
                <InputCheckBox name="category" id="Electronics" />
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
