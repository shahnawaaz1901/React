//* Packages
import { useRef, useState, useEffect } from "react";
import { TiArrowBack } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

//* Internal Modules
import ImageForm from "./ImageForm";
import styles from "./imageList.module.css";
// import backBtn from "../images/back.png";
import searchBtn from "../images/search.png";
import crossBtn from "../images/remove.png";
import Image from "./Image";

export default function ImageList(props) {
  const { dispatch, imageCategory, updateCurrentImage, notify, images } = props;
  const [formVisible, setFormVisiblity] = useState(false); //* Image Add or Update Form Visiblity
  const [searchBarVisible, setSearchBarVisiblity] = useState(false); //* Search bar Visiblity
  const [searchImageData, setSearchImageData] = useState([]); //* For Storing WhatEver Data is Matched from user Search
  const [searchBarValue, setSearchBarValue] = useState(""); //* For Storing the Search Data
  const [imageWhichUpdate, setImageWhichUpdate] = useState(null); //* For Storing the ImageData which We Want to Update
  const searchInputRef = useRef();
  /*
    Storing the Data value from Images if searchBar not visible and searchBarValue
    is Empty, otherWise search the images which matched with user search value
  */
  let data = searchBarVisible && searchBarValue ? searchImageData : images;

  //* Update visiblity of form Component
  function changeImageFormVisiblity() {
    setFormVisiblity(!formVisible);
    setImageWhichUpdate(null);
  }

  /* 
    WhenEver user Click on Edit Button Value of that Image is set to ImageWhichUpdate 
    state so that we can easily get the imageData and fill the update form with the
    Data    
  */
  function updateImage(imageData) {
    setImageWhichUpdate(imageData);
    setFormVisiblity(true);
  }

  //* When User Start Typing on Search Bar Images Should be filtered
  function handleSearchBarChange(e) {
    setSearchBarValue(e.target.value);
    setSearchImageData(
      images.filter((each) => each.title.includes(e.target.value))
    );
  }

  //* When Search Bar Visible focus on Search Bar
  useEffect(() => {
    if (searchBarVisible) {
      searchInputRef.current.focus();
    }
  }, [searchBarVisible]);

  return (
    <>
      {formVisible ? (
        <ImageForm
          imageCategory={imageCategory}
          notify={notify}
          imageWhichUpdate={imageWhichUpdate}
          updateFormVisiblity={setFormVisiblity}
        />
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
              {/* <img src={backBtn} alt="back-btn" /> */}
              <TiArrowBack
                size={30}
                // style={{}}
                onMouseEnter={(e) => console.log(e.target)}
              />
            </div>
            <div>
              <h1 className={styles.mainHeading}>
                {data.length ? "" : "No"} Images in {imageCategory}
              </h1>
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
                  onClick={() => setSearchBarVisiblity(!searchBarVisible)}
                >
                  {/* <img src={crossBtn} alt="cross button" /> */}
                  <MdCancel size={20} />
                </div>
              </div>
            ) : (
              <div
                className={styles.searchBtn}
                onClick={() => setSearchBarVisiblity(!searchBarVisible)}
              >
                {/* <img src={searchBtn} alt="search-btn" /> */}
                <FaSearch size={20} />
              </div>
            )}

            <div onClick={changeImageFormVisiblity} className={styles.btn}>
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
          {data.map((eachImage) => (
            <Image
              title={eachImage.title}
              imageURL={eachImage.imageURL}
              updateCurrentImage={updateCurrentImage}
              id={eachImage.id}
              key={eachImage.id}
              imageCategory={imageCategory}
              notify={notify}
              updateImage={updateImage}
              setFormVisiblity={setFormVisiblity}
            />
          ))}
        </div>
      </div>
    </>
  );
}
