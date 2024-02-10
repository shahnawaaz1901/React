/*
    LifeCycle Stages of a Component in React :
    1. Mounting
    2. Update
    3. Unmounting
    4. Error

*/

/*
    Method of Mounting Phase Methods :
    1. constructor()
    2. Static getDerivedStateFromProps()        //* Rarely Used
    3. render()
    4. componentDidMount()


    constructor() : we need to create constructor when we used state and want to 
            bind the functions or methods in the class, constructor is only called
            in case when we create constructor. One thing that we need to know that 
            is Constructor is only placed where we can directly modify the state 
            except constructor we if we want to modify then we need to use setState()
            function which 2 form is exist and Any side-effect should be avoided
            in the constructor including setState() function.
    
    render() : render function is the only required function in the class based 
            component because JSX which is required for the component is return
            from the render function, if we dont write constructor and state it's
            fine but the render function is compulsary and inside the render function
            side-effect should be avoided because render function should be a pure 
            function

    Static getDerivedStateFromProps() : This is the very rare method which is used 
            because this method is only called when we setState using the previous
            state which is passed through props in the component and this function
            is called just before the render function and here also React says no 
            side effect is performed inside this method

    componentDidMount() : this function method is called once whenever a component 
            or it's children is mounting on the DOM then this function is invoked,
            this place is best to perform any side effect including the web Api, 
            browser api
*/
