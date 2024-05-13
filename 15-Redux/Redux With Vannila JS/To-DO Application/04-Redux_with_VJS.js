/*
Because redux is created by the other team so before using the redux we need to first install the 
redux using the "npm" or "yarn".
*/

//* Import the Redux
import redux from "redux";

/*
Because redux is open source we can use the redux with any of the library of javascript or using the
plain javascript.
*/

//* Initial State
const initialState = { todos: [] };

//* Actions
/* Define the Actions for the Add TO-Do and Toggle TO-Do */
const ADD_TODO = "add";
const TOGGLE_TODO = "toggle";

//* Action Creators
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });

//* Reducer
/* Because Reducer only place which modify the state so it takes the state and action */
/* 
    One thing that we need to understand that reducer "must" be pure function so it returns the state
    after doing the operation and whatEver state value it returns value of initialState will be change
    according to that
*/
function todoReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((each, index) => {
          if (index == action.index) {
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
