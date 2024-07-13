import { useContext } from "react";
import { ProductContext } from "../context/mainContext";
export function useProductValue() {
  const value = useContext(ProductContext);
  return value;
}
