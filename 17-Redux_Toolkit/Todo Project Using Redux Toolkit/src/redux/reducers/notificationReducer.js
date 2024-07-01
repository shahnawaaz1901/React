import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "Notification",
  initialState: { type: "", message: "" },
  reducers: {
    //* For Resetting the Current Message
    reset: (state, action) => {
      state.message = "";
      state.type = "";
    },
  },
  extraReducers: {
    /* 
        Key of ExtraReducer is build using the slice name and reducer 
        function name for which reducer function we want to change our 
        current state message 
    */
    "Todo/add": (state, action) => {
      state.message = "Todo is Created !!";
      state.type = "Todo";
    },
    "Todo/toggle": (state, action) => {
      state.message = "Todo Toggled Successfully !!";
      state.type = "Todo";
    },
    /*
        Slice Name is "Note", so first we write slice name after that write the 
        reducer function name
    */
    "Note/add": (state, action) => {
      state.message = "Note Created Successfully !!";
      state.type = "Note";
    },
    "Note/delete": (state, action) => {
      state.message = "Note Deleted Successfully !!";
      state.type = "Note";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export const notificationActions = notificationSlice.actions;
