/*
    Redux : Redux is nothing but a state management library.

    State : State is nothing but a variable or placeholder or data holder which stores 
            the data and re render the component whenever data is updated 

    Suppose we have n number of Components of our app and all the components may have or 
    may not have the state. and suppose we have a state in one of the our component and we
    want to share that state data to other component from that component we can share that
    data by passing the data as props and from that component we can further pass to another
    children and then further another, so passing the data from parent to children multiple
    times called the prop drilling, so if we pass the data from source to destination so we
    dont have any option pass the data as props directly we need to cover all the components
    which comes between the source to destination. Even if 100 of components are there between
    the source and destination then we need to cover all the components by recieving the props
    and pass the props again to the children component, this is not impossible but painful and
    memory consuming because every component takes the memory for storing the props again and
    again because every time we pass the prop actual memory address not shared a copy of data
    is shared, because data is not stored on any server or database all the data is kept inside
    the browser and browser not have the lot of storage option. Another issue with prop drilling
    is the data predictive because suppose we want to share the storage from top parent to bottom
    children through props in betweeen hundreds of component is involve to pass the data, so any
    component can modify the data and pass the incorrect data or suppose prop data is updated
    in between then how the parent know that data is updated so this is the data predictable issue
    and if we can't able to predict the data then how can we create the data intensive application

    All these kind of issues is being resolved by using the state management library. What the
    state management tool does, state management tool create a seprate memory outside the components
    or on top of all component we can call application state or global state so every component 
    directly access the state withOut any props, this is similar like the context API in which 
    we do the similar thing but context API has some limitations. Redux based on flux architecure
    which prevent the bidrectional data sharing between the components
*/
