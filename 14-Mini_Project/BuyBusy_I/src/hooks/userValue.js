import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function useUserValue() {
  const value = useContext(UserContext);
  return value;
}
