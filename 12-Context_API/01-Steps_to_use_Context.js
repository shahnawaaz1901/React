/*
    1. Create Context using : createContext()
    2. export the context which we store in a variable by calling the createContext()
    3. Provide the Context to the Components by using :
        <Context_Name.Provider value={}></Context_Name.Provider>

    Value can be anything Object, Array, Number or String or Can be anything
    3. Consume the Context in Two Ways : 
        I. By using the useContext() hook in which we need to pass the Context_Name
            Which we Store By calling the createContext() function
        II. In class based Components we have not access of the hooks so how can we
            consume the context value we can consume like this :

            <Context_Name.Consumer>{(value)=>{return JSX}}</Context_Name.Consumer>
    
    WhatEver Value which we passed when providing the Context we can consume by 
    recieving the value in the argument of function which we can use in JSX and
    return the JSX
*/
