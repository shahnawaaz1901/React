/*

    useReducer : useReducer is also another React hook, Sometime useReducer 
        is the alternate of the useState hook and this is called advance hook 
        in react. as name suggest useReducer helps us to reduce the code length 
        because we can do multiple stage changes in to the reducer function. 
        useReducer can be used as alternate of useState when we manipulate the 
        state by multiple event Handlers like in our case we manipulate the 
        state when we click on add btn and when we click on remove button. With 
        the help of useReducer hook we can seprate the logic of manipulating 
        state inside the other function called reducer which we passed when we 
        create the reducer. Syntax of useReducer :
        
        const [state, dispatch] = useReducer(reducer, initialValue, init)

        Reducer : components with many state updates spread across many event 
            handlers can get overwhelming, so for these cases we can 
            consolidated the all the state update logic outside your component 
            in a single function called "reducer".

        State : state remains same as we use in the case of useState

        initialValue : initialize the state with this value, and initial value 
            can be anything string ,number, object or arrays

        init : this is an optional argument, this function is came into the 
            picture when sometime we need to calculate or perform the some
            operation to initialize the initialValue of the state. This 
            function is very rarely used.
        
        dispatch : dispatch is a function which perform same as setState 
            function but not acutally because this function returns a sum
            value, dispatch function is updatet the state and also works 
            triggered a re render , and we need to pass the action only 
            argument to the dispatch function, action is an object which 
            contains the property of name "type" this type property is 
            important to pass so that our reducer function can understand 
            which operation user want to perform, so react will set the next
            state to the result of calling the reducer function which we 
            provide with the current state and action which we passed to the
            dispatch, whatEver value we returns from the reducer that value
            is the set in the state whatever state we created corresponding
            to that reducer function
*/
