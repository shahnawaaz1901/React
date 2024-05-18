import { useContext } from "react";
import { ProductContext } from "../context/productContext";
export function useProductValue() {
  const value = useContext(ProductContext);
  return value;
}
