import { useState } from "react";
import styles from "./imageList.module.css";
export default function ImageList(props) {
  return (
    <>
      <div className={styles.imageListContainer}>
        <div className={styles.heading}>
          <div className={styles.previousBtn}></div>
          <div className={styles.mainHeading}></div>
          <div className={styles.searchBtn}></div>
          <div className={styles.addImageBtn}></div>
        </div>
      </div>
    </>
  );
}
