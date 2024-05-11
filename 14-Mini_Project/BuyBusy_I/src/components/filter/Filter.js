import { useState } from "react";
import styles from "./filter.module.css";
import { useForm } from "react-hook-form";
function Filter() {
  const [price, setPrice] = useState(0);
  const { register, handleSubmit } = useForm();

  function onChange(data) {
    console.log(data);
    setPrice(data.range);
  }

  function change(e) {
    console.log(e.target);
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.filterPrice}>
        <span>Price : </span>
        <span>{price}</span>
      </div>
      <form onSubmit={handleSubmit(onChange)}>
        <div className={styles.filterRange}>
          <input
            type="range"
            height="5"
            min={0}
            max={100000}
            step={10}
            className={styles.filterRangeInput}
            defaultValue={price}
            {...register("range")}
          />
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryTitle}>Category</div>
          <div className={styles.category}>
            <span>
              <input
                type="checkbox"
                name="category"
                className={styles.checkBox}
                {...register("Men Clothing")}
                id="men"
              />
            </span>
            <label htmlFor="men">Men's Clothing</label>
          </div>
          <div className={styles.category}>
            <span>
              <input
                type="checkbox"
                name="category"
                className={styles.checkBox}
                {...register("Women Clothing")}
                id="women"
              />
            </span>
            <label htmlFor="women">Women's Clothing</label>
          </div>
          <div className={styles.category}>
            <span>
              <input
                type="checkbox"
                name="category"
                className={styles.checkBox}
                {...register("Jwellery")}
                id="jwellery"
              />
            </span>
            <label htmlFor="jwellery">Jwellery</label>
          </div>
          <div className={styles.category}>
            <span>
              <input
                type="checkbox"
                name="category"
                className={styles.checkBox}
                {...register("Electronics")}
                id="electronics"
              />
            </span>
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
        <input type="submit" className={styles.subBtn} />
      </form>
    </div>
  );
}
export default Filter;
