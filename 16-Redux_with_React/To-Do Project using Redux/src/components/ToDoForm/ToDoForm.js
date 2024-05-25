import { useState } from "react";
import "./ToDoForm.css";
/* Import the Dispatch Hook */
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoAction";

function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");

  /* Get the Dispatch function */
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTodo(todoText);
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
