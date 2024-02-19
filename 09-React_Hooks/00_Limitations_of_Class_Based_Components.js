/*
    As Far we see that We have two types of Components : 
    1. Functional Components
    2. Classes Components

    But there are few limitations of Functional and Class Based Components :

    Functional Component : In Functional Component We can't run a stateful 
                logic because for running stateful logic we need create a 
                Class Based Components, we can say for create a stateful
                logic we need to use class Based Component. This is the limitations
                of functional Components.

    Class Components : Few limitations of CLass Based Components :
            1. Hard to reuse the stateful Logic between the Components : Suppose we have 3 
                components one is app and inside the app two child component of C1 and C2 
                and C2 have further child components so if write state logic insde the C2 
                then both chidrens is able to access state using the props, but suppose we 
                reached at the condition where we want to share the state with the sibling 
                component C1 then we can't share with the C2 Component we need to write the 
                state logic to the parent component which is very painful to do, so this is 
                the one of the limitation of class Based components.
            
            2. Complex components becomes difficult to understand : Components which perform 
                some side effect and have some lifecycle method is more complex to understand 
                between the Multiple classes component
            
            3. Classes can be confusing at times : Because in javascript we can pass the function 
                as callbacks so we need to be very careful because is we pass function as callback 
                we need to bind this keyword otherwise we can lost value of this in our method 
                function

    So Due to high Limitations of class based components we will use the functional component, but 
    now question is functional component not have the state then how can we use state in the functional
    component, so for answer this question functional component have the state but using a concept
    which called "Hooks". Which helps us to fix the all limitations which occures by using the class based
    component
*/
