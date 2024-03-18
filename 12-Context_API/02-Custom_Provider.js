/*
    Custom Provider helps us to Write Logic in One file instead of seprating in 
    multiple files, we can say by using custom Provider we can coupled tightly
    of our app components logic.

    Custom Provider : Custom Provider is nothing but a Component which acts as a
        Provider which makes use of a default Provider, in simpler term we can
        understand like this that we create a Component in which we return Some
        JSX which is nothing but boundary of a Context, which provides context
        to the components.

    Note : One thing that we need to understand that's when we create a component
    we can render that component by using self enclosing tag of via normally used
    tag like this :

    1. <Component />
    2. <Component></Component>

    We can use second method here to wrap all components inside the custom context
    because whatever we write inside the both opening and closing tag that components
    or tags became the children of the component, and we can access all the children
    inside props by the parent component
*/
