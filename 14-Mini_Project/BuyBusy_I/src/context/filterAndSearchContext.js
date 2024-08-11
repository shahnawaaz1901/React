import { createContext, useState } from "react";

export const FilterContext = createContext();
export const SearchContext = createContext();

function SearchAndFilterProvider(props) {
  const [filterData, setFilterData] = useState({});
  const [searchData, setSearchData] = useState("");
  return (
    <FilterContext.Provider value={{ filterData, setFilterData }}>
      <SearchContext.Provider value={{ searchData, setSearchData }}>
        {props.children}
      </SearchContext.Provider>
    </FilterContext.Provider>
  );
}

export default SearchAndFilterProvider;
