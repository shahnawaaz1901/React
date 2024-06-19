/*
    We Can manage the state using the Redux Toolkit. For Setting Up Store
    we need to create reducers but in redux toolkit we don't need to create
    reducers and actions seprately, we just need to create a reducer file
    in which first we need to create a slice(slice is nothing but part of
    our application) using the createSlice function which comes from redux
    toolkit,which returns the slice which contains the reducers, actions
    automatically, createSlice function takes an object as argument in which
    we need to specify three things mainly first is name of our slice, suppose
    we create slice for TodoList Application so we can assign name "todo",
    second is initialState which saves our state in our store, and the last
    is reducers which takes object in which we need specify the reducer 
    functions as key pair values, and createSlice function automatically 
    creates the actions implicitly, so for using those actions we need to 
    get the actions from slice_name.actions and export the actions, Code for
    Redux Toolkit is below :

    import {createSlice} from "@reduxjs/toolkit";

    const slice = createSlice({
        name : Slice_Name,
        initialState : {},
        reducers : {
            reducerOne : (state, action)=>{},
            reducerTwo : (state, action)=>{}
        }
    })
    
    export const actions = slice.actions

    export const reducer = slice.reducer
*/
