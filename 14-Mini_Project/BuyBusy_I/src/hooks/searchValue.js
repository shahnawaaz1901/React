import { SearchContext } from "../context/mainContext";
import { useContext } from "react";
function useSearchValue() {
  const data = useContext(SearchContext);
  return data;
}

export default useSearchValue;
