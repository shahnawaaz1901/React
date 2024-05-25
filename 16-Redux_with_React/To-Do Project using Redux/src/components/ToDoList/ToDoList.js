import "./ToDoList.css";
import { useSelector } from "react-redux";

/*
  For Accessing the store state we can directly import state and get the state by calling the 
  store.getState() function but for that we need to import that store every time and in every 
  component in which we need to access the state, so for the security concern instead of access
  the store directly we use a hook named "useSelector" which comes from "react-redux", "useSelector"
  works as intermediater between developer and store it takes the state from store and gives us
*/
function ToDoList({ /* todos,*/ onToggle }) {
  /* 
    useSelector takes a function as argument which function takes the state as argument and from 
    that function we can either returns some part of state or can return the whole state from the
    callback function, in our case we want todos from our store
  */
  const todos = useSelector((state) => state.todos);
  /*
    useSelector works as same like store.getState() function but we dont need to import the store,
    Reason of using the useSelector() function is to follow the two principles :
    
    1. Abstraction : Hide Some Important thing from Outside and Only Accessable inside the some
        component. Here We Also Hide Our store and Available for All but we can access the store
        by using the hook.
    2. Encapsulation
  */
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                onToggle(index);
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
