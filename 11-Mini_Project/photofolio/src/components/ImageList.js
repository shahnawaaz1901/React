import { useState } from "react";
import styles from "./imageList.module.css";
import backBtn from "../images/back.png";
import searchBtn from "../images/search.png";
import ImageForm from "./ImageForm";
export default function ImageList(props) {
  console.log(props);
  const { dispatch } = props;
  const [formVisible, updateFormVisiblity] = useState(false);
  const { name: imageCategory } = props.imageCategory;

  function handleAddBtnClick(e) {
    updateFormVisiblity(!formVisible);
  }

  return (
    <>
      {formVisible ? <ImageForm /> : ""}
      <div className={styles.imageListContainer}>
        <div className={styles.heading}>
          <div className={styles.startName}>
            <div
              className={styles.previousBtn}
              onClick={() => dispatch({ type: "albums" })}
            >
              <img src={backBtn} alt="back-btn" />
            </div>
            <div>
              <h1 className={styles.mainHeading}>Images in {imageCategory}</h1>
            </div>
          </div>
          <div className={styles.end}>
            <div className={styles.searchBtn}>
              <img src={searchBtn} alt="back-btn" />
            </div>
            <div onClick={handleAddBtnClick}>
              <button
                className={
                  formVisible ? styles.cancelImageBtn : styles.addImageBtn
                }
              >
                {formVisible ? "Cancel" : "Add Image"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
