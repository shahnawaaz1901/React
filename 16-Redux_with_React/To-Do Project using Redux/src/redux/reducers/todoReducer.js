import { TOGGLE_TODO, ADD_TODO } from "../actions/todoAction.js";
import { toggleTodo, addTodo } from "../actions/todoAction.js";
/* 
    Reducer function not take any external data it takes data from the argument which 
    first is state which we can be used to perform certain operation and another one
    is action which contains two things one is type and another one is payload which
    contains the data if required
*/
function todoReducers(state, action) {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((eachTodo, index) => {
          if (index === Number(action.payload.index)) {
            eachTodo.completed = !eachTodo.completed;
          }
          return eachTodo;
        }),
      };
    default:
      return state;
  }
}
export default todoReducers;
