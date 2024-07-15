import { useRef, useState } from "react";
import styles from "./searchBar.module.css";
import { FaXmark } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
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
      {/* <FaXmark className={styles.crossBtn} onClick={resetSearchData} /> */}
      <GiCrossedBones className={styles.crossBtn} onClick={resetSearchData} />
    </div>
  );
}

export default SearchBar;
