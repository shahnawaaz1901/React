/*
    Propes : Propes in React are similar to passing an argument to the 
        function, So that we can pass data from a component to other and
        we can able to change the local state of a component using the
        propes.

    Note : One thing that we need to remember is if we want pass propes
        we can pass propes only from parent to child.

    Suppose if we have a tree like where "App" is the main Component or root
    and "Movie1" and "Movie2" are the two children or component which is called
    inside the main App component, then we can pass prop from "App" to "Movie1"
    and from "App" to "Movie2", we can't pass the props from "Movie1" to "App"
    or "Movie1" to "Movie2" and vice verca
*/

/*
    For passing props we neeed to specified the attribute which we can access
    in child component usign the this.props object which key is the attribute
    name and value is whatever value we provide for the attribute, however we
    can pass any value in the attribute like integer, string, object, array
    and functions what ever value we provide we can recieve that into the this.
    props object

*/
