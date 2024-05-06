import { useRef, useState } from "react";
import styles from "./searchBar.module.css";
import twitterIcon from "../../data/twitter.png";
function SearchBar() {
  const searchRef = useRef();
  const [searchData, setSearchData] = useState("");

  function resetSearchData() {
    searchRef.current.value = "";
    setSearchData(searchRef.current.value);
  }
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.form}
        placeholder="Search Products..."
        ref={searchRef}
        onChange={() => setSearchData(searchRef.current.value)}
        value={searchData}
      />
      <img
        src={twitterIcon}
        alt="cross-btn"
        className={styles.crossBtn}
        onClick={resetSearchData}
      />
    </div>
  );
}

export default SearchBar;
