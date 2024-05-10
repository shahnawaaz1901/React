import { useState } from "react";
import styles from "./filter.module.css";
function Filter() {
  const [price, setPrice] = useState(205);
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.filterPrice}>
        <span>Price : </span>
        <span>{price}</span>
      </div>
      <div className={styles.filterRange}>
        <input
          type="range"
          height="5"
          min={0}
          max={100000}
          step={10}
          className={styles.filterRangeInput}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price}
        />
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryTitle}>Category</div>
        {/* 
        <div className={styles.category}>
          <span>
            <input
              type="checkbox"
              name="category"
              className={styles.checkBox}
            />
          </span>
          <span>Men's Clothing</span>
        </div>
        <div className={styles.category}>
          <span>
            <input
              type="checkbox"
              name="category"
              className={styles.checkBox}
            />
          </span>
          <span>Women's Clothing</span>
        </div>
        <div className={styles.category}>
          <span>
            <input
              type="checkbox"
              name="category"
              className={styles.checkBox}
            />
          </span>
          <span>Jwellery</span>
        </div>
        <div className={styles.category}>
          <span>
            <input
              type="checkbox"
              name="category"
              className={styles.checkBox}
            />
          </span>
          <span>Electronics</span>
        </div> */}
      </div>
    </div>
  );
}
export default Filter;
