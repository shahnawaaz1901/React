/*

    useReducer : useReducer is also another React hook, Sometime useReducer 
        replace the useState hook. as name suggest useReducer helps us to
        reduce the code length because we can do multiple stage changes in
        to the reducer function. useReducer can be replaced the useState when
        we manipulate the state by multiple event Handlers like in our case 
        we manipulate the state when we click on add btn and when we click on 
        remove button. With the help of useReducer hook we can seprate the 
        logic of manipulating state inside the other function called reducer
        which we passed when we create the reducer. Syntax of useReducer :
        
        const [state, dispatch] = useReducer(reducer, initialValue, init)
*/
