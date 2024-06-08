//* Reducers using Redux
//* Import Actions
/* Because we need to check the Action that which Action User Want to Perform 
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoAction";

//* Import Action Creators
 Create the Actions using the functions 
import { addTodo, toggleTodo } from "../actions/todoAction";

//* Create Initial State

  Because state is only managed by the reducer so we need to export the reducer function 
  not the state 

const initialState = {
  todos: [
    { text: "Learn Redux in Weekend", completed: false, id: 1 },
    { text: "Learn Redux Toolkit in Upcoming Months", completed: false, id: 2 },
  ],
};

Reducer function must be a pure function which returns the state 
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

Because the reducer is used in another file so export 
export default reducer;
*/

//* Reducer using Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

/*
  In Redux toolkit We don't need to taken care about the actions and 
  action creators it's all done automcatically by the Redux Toolkit
*/

/*
  For Creating the Reducers we need to import slice function from redux 
  toolkit which accepts an object as argument, in the object we need to
  define three things one is name of the slice means name which we want
  to give to the whole slice function because slice is the one part of
  our application and we can have many slices that's why we need to specify
  the name of the slice, second property that expects is the initialState,
  which is nothing but the initial Value of the State and third argument
  is the reducers which takes an object of reducers.
*/

const todoSlice = createSlice({
  name: "Todo",
  initialState: { todos: [] },
  /*
    reducers takes the object where each key get the function which is 
    reducer function which takes two arguments one is state which is our
    state which we define in initialState and second argument is the action
    in which we have a property by default is payload so any data user pass
    to us is accessable inside the payload
  */
  reducers: {
    add: (state, action) => {
      //* Get the text Value from Payload
      const { text } = action.payload;
      state.todos.push({ text, isCompleted: false });
    },
    toggle: (state, action) => {
      //* Get the Index Value from Payload
      const { index } = action.payload;
      state.todos.map((value, i) => {
        if (i === index) {
          value.isCompleted = !value.isCompleted;
        }
        return value;
      });
    },
  },
});
