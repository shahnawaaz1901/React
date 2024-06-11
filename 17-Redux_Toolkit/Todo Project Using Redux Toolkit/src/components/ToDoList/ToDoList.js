import "./ToDoList.css";
import { useSelector } from "react-redux"; //* Import the useSelector to Access the Store
import { useDispatch } from "react-redux"; //* Import the useDispatch to Perform the Operation
// import { toggleTodo } from "../../redux/actions/todoAction";
import { todoActions } from "../../redux/reducers/todoReducer";
/*
  For Accessing the store state we can directly import state and get the state by calling the 
  store.getState() function but for that we need to import that store every time and in every 
  component in which we need to access the state, so for the security concern instead of access
  the store directly we use a hook named "useSelector" which comes from "react-redux", "useSelector"
  works as intermediater between developer and store it takes the state from store and gives us
*/
function ToDoList(/*{ todos, onToggle }*/) {
  /* 
    useSelector takes a function as argument which function takes the state as argument and from 
    that function we can either returns some part of state or can return the whole state from the
    callback function, in our case we want todos from our store
  */
  /* 
    Because we change our store for multiple reducers so we can't directly access the todoState
    we need to pass the key in which we pass the reducer function for that state, because we pass
    todoReducer as it is so we need to access todoState by todoReducer property
    
    const todos = useSelector((state) => state.todos);
  */
  const { todos } = useSelector((state) => state.todoReducer);
  /*
    useSelector works as same like store.getState() function but we dont need to import the store,
    Reason of using the useSelector() function is to follow the two principles :
    
    1. Abstraction : Hide Some Important thing from Outside and Only Accessable inside the some
        component. Here We Also Hide Our store and Available for All but we can access the store
        by using the hook.
    2. Encapsulation
  */

  /* 
    useDispatch() function gives us dispatch function which helps us to perform operation on our 
    state in store, and as soon as we made changes in our store using the dispatch function it 
    automatically re render the consumer component which consume the state from store.
  */

  /*
    dispatch() -> reducers() -> store
    
    internally we dispatch an action and basis on the action reducer perform the operation and reducer
    changes the data on state inside the store and as soon as store is updated our components which 
    consume that state in which changes has been done is also re render automatically, This is working
    on publisher subscriber pattern, in which we subscribe the newsletter and if someone publish new
    article we get notified that the new news is published
  */
  const dispatch = useDispatch();
  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.isCompleted ? "completed" : "pending"}>
              {todo.isCompleted ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              // onClick={() => {
              //   onToggle(index);
              // }}
              // onClick={() => dispatch(toggleTodo(index))} //* Using Redux
              onClick={() => dispatch(todoActions.toggle({ index }))}
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
