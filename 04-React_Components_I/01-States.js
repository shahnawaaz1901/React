/*
    Sometime we need to write a html content which styles and every thing is same 
    except the text content, this text content is differ again and again when we 
    create a new component, just like our movie app we have multiple movie card and
    each card contains the same styling and every thing is same except the logo of
    movie and the textContent, So we dont need to hardCode each data and render create
    seprate component for every movie tag, we dont do this because it's very hard
    and painful work and chances of mistakes is very high for a developer, so instead
    of this we can store every movie data into the object and created an array of
    object and traverse the array and create new Component for every object, but
    instead of this in React we can use "State" which react provide us for with more 
    benefits and usages
*/

/*
    State : State is built in Object in React which we can used to store data into 
        the object and use it when ever we required. State is used in the constructor
        of the class. In React "State" is said to be a "Single Source of truth". and
        when we required object it's recommend that data is stored in the states
*/
