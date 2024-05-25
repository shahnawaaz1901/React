import todoReducer from "./reducers/todoReducer";
import * as redux from "redux";

/*
    Create the Store using createStore which is Deprecated we Learn Latest 
    configureStore React Toolkit in upcoming videos
*/

/*
    We are creating the store file a single file because it's good practice
    to create a single file for store, not recommend the folder until it's
    required 
*/

/*
    In Redux it's recommend to use Single Store to maintain the Security but can we have a single 
    Reducer "ecomReducer" for All Operation, Suppose we have created a ECOM Application, in which 
    have order, cart, user and many other feature, can we maintain all the features by using the 
    single reducer .? 
    we can and technically it's possible but it's voilet a software development principle known 
    "Single Responsiblity Principle(SRP)" which suggest that if we have multiple modules then each 
    module should be changed for only single Reason but if we maintain single reducer for all our 
    fetures, reducer made changes in our store for three reasons one for order, cart and user as well.
    So for this we maintain single store but maintain multiple reducer for each feature, so that we
    implement the best Practices for both.
*/
const store = redux.createStore(todoReducer);
export default store;
