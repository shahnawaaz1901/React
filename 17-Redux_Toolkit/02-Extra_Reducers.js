/*
    Problem With normal Reducers : Normal Reducers of every Slice is independent, 
                means reducers is called only when we dispatch actions for that 
                Reducers, suppose if we want to call a reducer function based on
                some reducer function operation, means if we have two different 
                reducers and we want if one reducer function is called then second
                reducer function called automatically, in this case we can use the
                extraReducers.
    
    Extra Reducer takes an object in which every Key is created using the name and
    reducer function which is called seprated by slash "/", here name is the same 
    which we provide in the createSlice function.
*/
