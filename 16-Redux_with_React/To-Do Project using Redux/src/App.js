// import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import { useState } from "react";

/*
  In React we have Many thousands of Components, we need to provide the store to
  the components to use the state value but it's useless to provide context to 
  every component so we can wrap the certain components in which we need the state
  value so we need to provide the context by using the "Provider" which comes from
  "reac-redux", means Provider is specific to react it's not working on vanillaJS
  because vanillaJS not have the different components but react has.
  "react-redux" is the extension of "redux" library which provides more features
  to use in "react".
*/

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  };
  return (
    <div>
      <h1>To Do App</h1>
      {/* 
        Provide the Context to the components which are required, provider contains
        the store props to provide which store we want to provide to this context
        because in some applications we may have multiple stores that's why 
        providing the store is necessory to use the Store value which values we 
        want to use into the components
      */}
      <Provider store={store}>
        <TodoForm onCreateTodo={createTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </Provider>
    </div>
  );
}

export default App;
