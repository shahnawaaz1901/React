import { useSelector } from "react-redux";

function useTodoValue() {
  const { todos } = useSelector((state) => state.todoReducer);
  return todos;
}

export default useTodoValue;
