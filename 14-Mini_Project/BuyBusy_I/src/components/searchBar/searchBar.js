import { useRef } from "react";
import styles from "./searchBar.module.css";
import { GiCrossedBones } from "react-icons/gi";
import useSearchValue from "../../hooks/searchValue";

function SearchBar() {
  const { searchData, setSearchData } = useSearchValue();
  const searchRef = useRef();

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
      <GiCrossedBones className={styles.crossBtn} onClick={resetSearchData} />
    </div>
  );
}

export default SearchBar;
