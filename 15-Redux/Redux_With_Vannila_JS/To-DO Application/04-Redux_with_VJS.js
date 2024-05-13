/*
  Because redux is created by the other team so before using the redux we need to first install 
  redux using the "npm" or "yarn".
*/

//* Import the all file Redux as redux because no default export
import * as redux from "redux";
/*
  Because redux is open source we can use the redux with any of the library of javascript or 
  using the plain javascript.
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

//* Creating the ReduxStore

/*
    createStore function is deprecated not because it's have some limitation because redux team created
    a new seprate "redux-toolkit" which is better way to write redux logic because it takes the less
    lines of code and less efforts to perform the redux logic operation, however create store is deprecated
    but in the "redux-toolkit" configureStore which is recommended approach for writing logic using the
    redux is works internally same which we did that's why first we learn the raw logic of redux then we
    move further to redux-toolkit for better optimized approach, and because in the market many apps use
    the deprecated function so it's not possible to remove the function completely because many apps will
    break
*/

/* createStore takes the reducer as parameters */
const store = redux.createStore(todoReducer);

//* Dispatch the action
store.dispatch(addTodo("Learn the Redux"));
store.dispatch(addTodo("Completed the React Module"));
store.dispatch(toggleTodo(0));

//* Read the State from Store
console.log(store.getState());

/*
  Because We use the Redux with the vanilla Script so our component is this program file 
  because call the dispatch function from here
*/
