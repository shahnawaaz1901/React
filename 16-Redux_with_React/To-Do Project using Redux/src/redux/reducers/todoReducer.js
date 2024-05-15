//* Import Actions
/* Because we need to check the Action that which Action User Want to Perform */
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";

//* Import Action Creators
/* Create the Actions using the functions */
import { addTodo, toggleTodo } from "../actions/todoAction";

//* Create Initial State
/* 
  Because state is only managed by the reducer so we need to export the reducer function 
  not the state 
*/
const initialState = {
  todos: [],
};

/* Reducer function must be a pure function which returns the state */
//* Pass the Default Value of State
function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((each, index) => {
          if (index === action.payload.index) {
            each.completed = !each.completed;
          }
          return each;
        }),
      };
    }
    default: {
      return state;
    }
  }
}

/* Because the reducer is used in another file so export */
export default reducer;
