import { useRef, useState, useEffect } from "react";
import ImageForm from "./ImageForm";
import styles from "./imageList.module.css";
import backBtn from "../images/back.png";
import searchBtn from "../images/search.png";
import crossBtn from "../images/remove.png";
import Image from "./Image";
import db from "../firebase.config";
import { onSnapshot, collection } from "firebase/firestore";

export default function ImageList(props) {
  const { dispatch, name: imageCategory, updateCurrentImage, notify } = props;
  const [formVisible, updateFormVisiblity] = useState(false);
  const [searchBarVisible, updateSearchBarVisiblity] = useState(false);
  const [images, updateImages] = useState([]);
  const [searchImageData, setSearchImageData] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const searchInputRef = useRef();
  function handleAddBtnClick() {
    updateFormVisiblity(!formVisible);
  }

  function visibleSearchBar() {
    updateSearchBarVisiblity(!searchBarVisible);
  }

  function updateImage(updatedData) {
    console.log(updatedData);
  }
  function handleSearchBarChange(e) {
    setSearchBarValue(e.target.value);
    setSearchImageData(
      images.filter((each) => each.title.includes(e.target.value))
    );
  }

  useEffect(() => {
    if (searchBarVisible) {
      searchInputRef.current.focus();
    }
  }, [searchBarVisible]);

  useEffect(() => {
    onSnapshot(collection(db, imageCategory), (snapshot) => {
      const data = [];
      snapshot.forEach((each) => {
        data.push({ id: each.id, ...each.data() });
      });
      updateImages(data);
    });
  }, []);

  return (
    <>
      {formVisible ? (
        <ImageForm imageCategory={imageCategory} notify={notify} />
      ) : (
        ""
      )}
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
                    ref={searchInputRef}
                    onChange={handleSearchBarChange}
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
                <img src={searchBtn} alt="search-btn" />
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
        <div className={styles.imageList}>
          {searchBarVisible && searchBarValue
            ? searchImageData.map((eachImage) => (
                <Image
                  title={eachImage.title}
                  imageURL={eachImage.imageURL}
                  updateCurrentImage={updateCurrentImage}
                  id={eachImage.id}
                  key={eachImage.id}
                  imageCategory={imageCategory}
                  notify={notify}
                  updateImage={updateImage}
                />
              ))
            : images.map((eachImage) => (
                <Image
                  title={eachImage.title}
                  imageURL={eachImage.imageURL}
                  updateCurrentImage={updateCurrentImage}
                  id={eachImage.id}
                  key={eachImage.id}
                  imageCategory={imageCategory}
                  notify={notify}
                  updateImage={updateImage}
                />
              ))}
        </div>
      </div>
    </>
  );
}
