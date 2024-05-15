import todoReducer from "./reducers/todoReducer";
import redux from "redux";

/* 
    Create the Store using createStore which is Deprecated we Learn Latest 
    configureStore React Toolkit in upcoming videos
*/
const store = redux.createStore(todoReducer);
export default store;
