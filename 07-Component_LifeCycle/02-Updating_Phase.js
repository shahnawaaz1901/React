/*
    We Learn the Methods of Mounting Phase : 
    1. constructor
    2. getDerivedStateFromProps (Static Method)
    3. render
    4. componentDidMount

    Above 4 methods is the part of Only Mounting Phase, but in updating and 
    UnMounting Phase there are also few methods, which is work differently
    comparable to mounting phase methods :

    Update Phase : In Updating Phase, here also 5 methods exist, methods are 
    below in the order they were called :
    //* Like Mounting Phase Update Phase Also have few methods which used rarely

    //* Rarely Used Method
    1. static getDerivedStateFromProps() : This is Also rarely used static method
        which are called in both mounting and updating phase before calling the 
        render function, Also no Side-Effect is being performed in this method.

    //* Rarely Used Method
    2. shouldComponentUpdate(nextProps, nextState) : This is also very rare method 
        which is basically used for the Optimization Purpose, if we don't want to 
        re render the component by each and every state, in that case we can use this 
        method because less re rendering is increased the performance of app, it 
        returns by default true but depending on the condition we can return false 
        and if it returns false then render function not be called and component is 
        not re render again. No Side Effect is being performed in this function it 
        just only decide that re rendering should be happen or not, one thing that we
        need to understand that shouldComponentUpdate takes two arguments nextProps 
        and nextState basis on this two arguments we can control the re rendering of
        a component
    
    //* Commonly Used
    3. render() : render function is pure function it compares the value of state 
        and props before re rendering the component and if state and props is not 
        changed then it automatically not re render the component, if we want to
        manually decide to re render or not we can got with shouldComponentUpdate
        function.

    //* Rarely Used Method
    4. getSnapShotBeforeUpdate(prevProps, prevState) : This method is takes some 
        value as argument which is called snapshot, this function is invoked between 
        changes is reflected from virtual DOM to real DOM, and if we want to pass 
        value to componentDidUpdate we can Pass from here, this function method is 
        called after the render function and before the componentDidUpdate function, 
        No SideEffect performed in this method. This method takes two argument prevProps
        and prevState both of argument is previous value of of props and state, one
        thing that prevProps is only contains value if parent pass some value as props
        and same for state if we create state in constructor then we can use the state
        otherwise state is also not available, and what ever value we returns from here
        is recieved by the componentDidUpdate function as argument

    //* Commonly Used
    5. componentDidUpdate(prevProps, prevStates, snapshot) : As name suggest this 
        method is invoked when the component is re render or render function is 
        called, this method is very similar to componentDidMount because we can 
        perform any side effect or setState here withOut any boundation, but one 
        difference is componentDidMount only invoked once but componentDidUpdate 
        always invoked after every re rendering. componentDidUpdate method takes
        three arguments one is prevProps, prevState and snapshot, snapshot is
        the value which is returns from getSnapshotBeforeUpdate function if we not 
        return anything by default value will be null, all the argument in 
        componentDidUpdate is optional, prevProps and prevState is the value of props 
        and state previously or before update.
*/

/*
    Second Last Stage of a Component is UnMounting which contains only a single 
    method :

    1. componentWillUnmount() : This method is invoked just before a component is
        going to remove from the DOM or destroyed and here also no side effect is 
        performed, this method is used in the condition where we use side effect
        in our component and want to remove those operations just before removed 
        the component from the DOM to relase to occupy memory or remove the active
        calls, interval or timers if any.
*/

/*
    One thing that we need to remember that is all the lifecycle works with the 
    class component not the functional component because functional component not 
    have the render function although functional component has their own lifecycle 
    methods, Here we first learn Class based component LifeCycle First
*/
