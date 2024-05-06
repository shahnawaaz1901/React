import { useState } from "react";
import styles from "./searchBar.module.css";
import twitterIcon from "../../data/twitter.png";
function SearchBar() {
  const [searchData, setSearchData] = useState("");
  console.log(searchData);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.form}
        placeholder="Search Products..."
        onChange={(e) => setSearchData(e.target.value)}
      />
      <img
        src={twitterIcon}
        alt="cross-btn"
        className={styles.crossBtn}
        onClick={() => setSearchData("")}
      />
    </div>
  );
}

export default SearchBar;
