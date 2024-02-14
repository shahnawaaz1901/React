/*
    Now it's time to learn the Error handling part in React which is the last 
    Phase of the Component lifecycle, when ever our code is breaks or something
    went wrong in a component our whole UI is crashed and we can't able to see
    anything on the browser screen just for the One Single Component, so for fixing
    this kind of issue we wrap our component into the Errorhandling Component so 
    that any component of Our Code breaks we can handle it in better way.

    React Provides us Error Handling so that we can identify Error and Instead of
    showing Blank Screen we can render a fallback UI which represent some useful
    message like somthing went wrong or Any Kind of server Error.

    We Have Two Method function in the Error Handling Phase :

    1. static getDerivedStateFromError() : This is not the getDerivedStateFromProps()
                    function, this is also a static function but this function will
                    catch error in the child Component and helps us to render a fall
                    back UI in case of Error. In Short we can understand like this that
                    this method is used to render a fallback UI in case of any Error.

    2. componentDidCatch() : componentDidCatch() catch the error and show the Error on 
                    the Console, so that we can identify the Errors and can fix it in
                    future and Improve user experience

    Both the Methods are helps us to console the Error and render the fallback UI.
*/

/*
    Error Boundary in React : Error boundary is nothing but a component which have 
                    any of these Error handling lifecycle methods, One Condition is
                    must that Error Boundary Contains atLeast one Error Handling Phase
                    Method that could be componentDidCatch() or getDerivedStateFromError
                    because if we not use any method then how can we identify or render
                    a fallback UI, that React Component is Called as React Boundary
*/
