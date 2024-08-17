import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";
import { noteActions } from "./noteReducer";

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
  //* Deprecated Approach
  /* 
    Writing Keys by entering the slice name and after that reducer name 
    in string format we are hard coded the extraReducer key which is not
    good because tommorow if we changed any of reducer name or slice name
    we not get the error on compile time, we get the error on runtime and
    it's hard to fix the error, so this is not the right way to write the
    extraReducer Logic, because this approach is deprecated and may be 
    removed in the upcoming major update of Redux Toolkit 2.0
  extraReducers: {
    
        Key of ExtraReducer is build using the slice name and reducer 
        function name for which reducer function we want to change our 
        current state message 
    
    "Todo/add": (state, action) => {
      state.message = "Todo is Created !!";
      state.type = "Todo";
    },
    "Todo/toggle": (state, action) => {
      state.message = "Todo Toggled Successfully !!";
      state.type = "Todo";
    },
    
        Slice Name is "Note", so first we write slice name after that write the 
        reducer function name
    
    "Note/add": (state, action) => {
      state.message = "Note Created Successfully !!";
      state.type = "Note";
    },
    "Note/delete": (state, action) => {
      state.message = "Note Deleted Successfully !!";
      state.type = "Note";
    },
  },
  */
  //* Better Approaches
  //* 1. By using the builder
  /*
    An API builder helps us to write logic of extraReducer withOut hardCode 
    the names, in this case we first import the actionCreatos of eachSlice and 
    use it to write the extraReducer logic.
  */
  extraReducers: (builder) => {
    /*  
      builder.addCase takes two Parameters one is actionCreator means for 
      which action you want to perform action, and second is reducer function
      means if this action creator is called what operation reducer function
      need to do, again reducer function here takes two argument same as normal
      reducer function 
  */
    builder.addCase(todoActions.add, (state, action) => {
      state.message = "Todo Created Successfully !!";
      state.type = "Todo";
    });

    builder.addCase(todoActions.toggle, (state, action) => {
      state.message = "Todo Toggled Successfully !!";
      state.type = "Todo";
    });

    builder.addCase(noteActions.add, (state, action) => {
      state.message = "Note Added Successfully !!";
      state.type = "Note";
    });

    builder.addCase(noteActions.delete, (state, action) => {
      state.message = "Note Deleted Successfully !!";
      state.type = "Note";
    });
  },

  /*
  * 2. By using the MapObject
  ! Throw Warning in Some Cases
  extraReducers: {
    
      In the mapping we use actions inside suqare bracket and that value would be 
      a reducer function which we want to perform corresponding to that action
    
    [todoActions.add]: (state, action) => {
      state.message = "Todo Added Successfully !!";
      state.type = "Todo";
    },
    [todoActions.toggle]: (state, action) => {
      state.message = "Todo Toggled Successfully !!";
      state.type = "Todo";
    },
    [noteActions.add]: (state, action) => {
      state.message = "Note Added Successfully !!";
      state.type = "Note";
    },
    [noteActions.delete]: (state, action) => {
      state.message = "Note Deleted Successfully !!";
      state.type = "Note";
    },
  },*/
});

export const notificationReducer = notificationSlice.reducer;

export const notificationActions = notificationSlice.actions;
