/*
    useEffect : useEffect is used to performed any external Operation 
            inside the functional Component it's similar like componentDidMount 
            and componentDidUpdate which is also used to perform sideEffect
            inside the class based component, useEffect also comes up with
            the react and syntax of useEffect is : 

            useEffect(setup, dependencies?)
    
    useEffect takes two arguments one is setup and another one is dependencies
    1. setup is nothing but a function in which we can perform some external 
        operation or any sideEffect. setup is mendatory in useEffect function
    2. dependency is optional and it's nothing but an array of conditions and
        if all conditions is true then and only then setup function is called

    useEffect Act like both componentDidMount and componentDidUpdate because 
    both function is the last method of mounting and updating phase, useEffect 
    also called at the end and useEffect called on both when component is mount 
    and when component is update so we can say our one function is responsible 
    for both mounting and updating
*/
