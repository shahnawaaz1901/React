//* Action Type
export const ADD_TODO = "add";
export const TOGGLE_TODO = "toggle";

//* Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text, completed: false },
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: { index },
});
