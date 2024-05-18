import todoReducer from "./reducers/todoReducer";
import redux from "redux";

/*
    Create the Store using createStore which is Deprecated we Learn Latest 
    configureStore React Toolkit in upcoming videos
*/

/*
    We are creating the store file a single file because it's good practice
    to create a single file for store, not recommend the folder until it's
    required 
*/

const store = redux.createStore(todoReducer);
export default store;
