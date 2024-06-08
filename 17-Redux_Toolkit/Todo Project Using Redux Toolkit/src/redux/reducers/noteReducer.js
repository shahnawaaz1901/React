/*
import { ADD_NOTE, DELETE_NOTE } from "../actions/notesAction";
const INITIAL_STATE = {
  notes: [],
};
const noteReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case ADD_NOTE: {
      const { note } = action.payload;
      return {
        ...state,
        notes: [...state.notes, { note, createdOn: new Date() }],
      };
    }
    case DELETE_NOTE: {
      const { index } = action.payload;
      return { ...state, notes: state.notes.filter((note, i) => index !== i) };
    }
    default: {
      return state;
    }
  }
};

export default noteReducer;
*/

import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "Note",
  initialState: { notes: [] },
  reducers: {
    add: (state, action) => {
      const { text } = action.payload;
      state.notes.push({ note: text, createdOn: new Date() });
    },
    delete: (state, action) => {
      const { index } = action.payload;
      state.notes.filter((value, i) => index !== i);
    },
  },
});
