//* Define Actions
export const ADD_NOTE = "add";
export const DELETE_NOTE = "delete";

//* Define the Action Creators
export const addNote = (note) => ({ type: ADD_NOTE, payload: { note } });

export const deleteNote = (index) => ({
  type: DELETE_NOTE,
  payload: { index },
});
