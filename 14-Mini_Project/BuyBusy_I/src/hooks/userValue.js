import { useContext } from "react";
import { UserContext } from "../context/mainContext";

export function useUserValue() {
  const value = useContext(UserContext);
  return value;
}
