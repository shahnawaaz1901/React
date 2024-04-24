//* Packages
import { useRef, useState, useEffect } from "react";

//* Internal Modules
import ImageForm from "./ImageForm";
import styles from "./imageList.module.css";
import backBtn from "../images/back.png";
import searchBtn from "../images/search.png";
import crossBtn from "../images/remove.png";
import Image from "./Image";

export default function ImageList(props) {
  const { dispatch, imageCategory, updateCurrentImage, notify, images } = props;
  const [formVisible, setFormVisiblity] = useState(false);
  const [searchBarVisible, setSearchBarVisiblity] = useState(false);
  const [searchImageData, setSearchImageData] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [imageWhichUpdate, setImageWhichUpdate] = useState(null);
  const searchInputRef = useRef();
  let data = searchBarVisible && searchBarValue ? searchImageData : images;

  function changeImageFormVisiblity() {
    setFormVisiblity(!formVisible);
    setImageWhichUpdate(null);
  }

  function updateImage(imageData) {
    setImageWhichUpdate(imageData);
    setFormVisiblity(true);
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
                  onClick={() => setSearchBarVisiblity(!searchBarVisible)}
                >
                  <img src={crossBtn} alt="cross button" />
                </div>
              </div>
            ) : (
              <div
                className={styles.searchBtn}
                onClick={() => setSearchBarVisiblity(!searchBarVisible)}
              >
                <img src={searchBtn} alt="search-btn" />
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
            />
          ))}
        </div>
      </div>
    </>
  );
}
