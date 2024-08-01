import { FilterContext } from "../context/mainContext";
import { useContext } from "react";
function useFilterValue() {
  const context = useContext(FilterContext);
  return context;
}

export default useFilterValue;
