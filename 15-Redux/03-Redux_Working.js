/*
    Redux : Redux is State Management Library to manage the state at the Enterprices level efficiently,
            Also Redux can be implemeneted using React of WithOut React it has no limitations. Redux is
            based on "FLUX" Architecture which breaks the bidirectional flow of Data in the Components.

        Redux is mainly used or build for the Application State which is top in the Components Heirarchi,
        So We can say Redux manages our Application State not the individual State of Component.


        Redux works in three Parts : 

        1. Store : Store is nothing but storage system to store the state inside it, So Everytime when we
            want to pass the data to the components we are not passing using the components we pass the
            data from the store, this breaks the data flow connection between the components. We Recieve
            the Data from Store using the Selector. Selector is nothing but the link between the component
            and store, and through link we access the state from store.

        2. Actions : Now suppose we retrieve some data using link from the store now we want to update 
            some data on the store, if we directly update the data to the store it's again create the 
            bidirectional flow because we recieve the data from store now we sent some data to the store 
            to update the state. So for prevent the birdirectional flow we instead of calling store to 
            update the data we call the actions to update the data. So we recieve data from the store now 
            if we want we update the data by calling the actions now action will call reducer and reducer 
            will update the state on the store. And in the action we can't directly update the data first 
            we need to define the action to determine which operation we want to perform on the state. 
            This whole process of updation is done using the dispatchers, dispatchers is works as postman 
            it takes the data from the component and sent it to the reducers. Action contains the two 
            things one is "type" which define which action we want to perform and another is payload in 
            which whatEver data we want to passs to update the state is present there. Payload is optional 
            but action is "must" be passed
        
        3. Reducer : Reducer is the most important part of "Redux" because it recieve the actions which 
            user want to perform and according to that action it updates the state data on the store, so
            whatEver data which is present on store it's only touched by the reducer not from the other
            component or function. Reducer is nothing but a Javascript function, but redcuer not a simple
            normal function, reducer "MUST" be a Pure function so it's trustable by the component and the
            pure function not have the any external dependency, reducer just takes the input as argument
            and produce the output and return the output.

    All the Three Parts define that redux is based on flux architecture because by using the Redux there
    is no bidirectional data flow is there between the components and any other part of Redux, because 
    state comes from store and for update the state we need to call reducers in which we define whatever
    action we want to perform and reducer will takes the action and payload and based on the action it
    modifies the data on the Store, All these works is done by unidirectional flow not the bidrectional

*/
