/*
    useRef : in the class based components we used the React.createRef() 
        for the reference of the perticular field, but in the functional
        components instead of using the createRef() we use a speacial hook
        called the useRef(), this hooks helps us to reference a value which
        doesn't need to be rendering. Syntax for useRef :

        const ref = useRef(initialValue);

        initialValue works as same useState where we give the initialValue 
        to the stateVariable and similarly initialValue can be anything number 
        or string, but we can give the initialValue to the only initial render
        because after re rendering what ever value inside the currentObject will
        be assign to the variable 
*/
