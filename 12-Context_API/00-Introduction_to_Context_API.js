/*
    Suppose we have a huge Application in which many hundreds or thousand 
    of components exist, now suppose a scenario if we create a state from
    top parent of all children and we want that state in the last child of
    tree, then how can we achieve this we can achieve by passing the state
    as props from parent to child again and again until we reach at the last
    but this makes our code more bulky because we pass state by using the 
    props again and again every time from every state regardless of that state
    is not required from the all the components it's only required by the
    last child of the tree.

    And Suppose another scenario where we create a state in a component and 
    that value of state we required on the cousin component of the that state
    so how can we pass that state, we can't pass that state because there is
    no way to pass the state via any method to the cousin component, so in this
    case we need to restructure our app and pass that state to at least the 
    lower common parent so that we can share that state in both component by
    passing the state via props but for this it's very difficult because if
    we have a huge app which contains then thousands of components then our
    state logic would be stuck at the single parent component, so for solving
    both issues Context API is introduced
*/

/*
    Context API : Context API is a concept where we can create state seprately
            and whenever we required that state we can directly use that state
            by getting the value from that file. This works like this :

            Suppose we have a parent component which have multiple children 
            component so give context to the parent Component State and we can
            access that state in any child component of that parent withOut
            passing the state as props explicitly, so Context API provides us
            this functionality, so it solve our both problems one is we dont 
            need to restructured and shift the state to the parent and we dont
            need to pass state as props to the child and then that component
            pass value to another child vice versa..

            Value can be anything just like state , value can be number string
            object, array and function also.

            HowEver Component which we give context only that children components 
            have access of the state.

            We can understand like this that Context API helps us to avoid props 
            Drilling by lifting the state from higher parent node to lower node
            and Context API manage the state outside the component

*/
