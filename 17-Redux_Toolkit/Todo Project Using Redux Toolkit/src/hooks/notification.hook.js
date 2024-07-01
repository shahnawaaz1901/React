import { useSelector } from "react-redux";

export function useNotification() {
  return useSelector((state) => state.notificationReducer);
}
