import { FilterContext } from "../context/filterAndSearchContext";
import { useContext } from "react";
function useFilterValue() {
  const context = useContext(FilterContext);
  return context;
}

export default useFilterValue;
