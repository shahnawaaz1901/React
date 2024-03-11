import { useState } from "react";
import styles from "./imageList.module.css";
import backBtn from "../images/back.png";
import searchBtn from "../images/search.png";
import ImageForm from "./ImageForm";
import crossBtn from "../images/remove.png";
export default function ImageList(props) {
  const { dispatch } = props;
  const [formVisible, updateFormVisiblity] = useState(false);
  const [searchBarVisible, updateSearchBarVisiblity] = useState(false);
  const { name: imageCategory } = props.imageCategory;
  function handleAddBtnClick(e) {
    updateFormVisiblity(!formVisible);
  }

  function visibleSearchBar(e) {
    updateSearchBarVisiblity(!searchBarVisible);
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
            {searchBarVisible ? (
              <div className={styles.searchBar}>
                <div>
                  <input
                    type="text"
                    placeholder="type anything.."
                    className={styles.searchBarInput}
                  />
                </div>
                <div
                  className={styles.searchBarCrossBtn}
                  onClick={visibleSearchBar}
                >
                  <img src={crossBtn} alt="cross button" />
                </div>
              </div>
            ) : (
              <div className={styles.searchBtn} onClick={visibleSearchBar}>
                <img src={searchBtn} alt="back-btn" />
              </div>
            )}

            <div onClick={handleAddBtnClick} className={styles.btn}>
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
        <div className={styles.imageList}></div>
      </div>
    </>
  );
}
