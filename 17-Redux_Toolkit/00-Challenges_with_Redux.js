/*
    At the Start when we Started to Learn Redux we understand why we need 
    Redux or any State Managemenet Library to manage the State, that's why
    we implement the Redux to managing the State in Efficient Manner.
    
    Let's Take a Look to the Steps we Take for Setting Up Redux :
    
    1. Create Actions and Action Creators
    2. Create Reducers
    3. Create the Store And Provide the Context
    4. Implement useSelector for Getting State
    5. Implement useDispatch for implement the operations

    If we look at the steps we take lot of steps to setting up the Redux 
    sometime when we create a big application where we have many reducers, 
    at that time managing the multiple reducers perform the operations it 
    takes lot of time and hard work and majorly we have a problem for redux
    and that's "Hard to Debug" redux code because many things are happened
    behind the scenes like calling the reducer functions when we dispatch an
    event and over ride the state value whenever operation is being performed
    and some other things.

    Now Question is can we overcome these issues or can we have a better 
    soluton compare to Redux, answer is yes. 

    Team which created the Redux for Managing the Library identify all the
    issue earlier which we discussed and introduced a new version or comes
    up with the better solution by introducing the "Redux Toolkit". Which
    are the Recommended method by the Redux Team to manage the state. 

    Redux toolkit is not a completely new library or Tool to manage the State
    It's just the layer of traditional Redux, which helps us setting up the
    redux with less code and provide us the support of middleware so that we
    can able to debug the redux in simpler manner.

    Why Redux Toolkit over React Redux :
    1. Simple : Instead of writing the whole boilerplate for the actions, 
        action creators and many things, we can create actions, reducers
        and store in simpler manner with Less Code.
    2. Opinionated : Because by using the Redux Toolkit we dont worry about 
        the defining the actions, creating the store, creating the reducers 
        and all things is going to taken care by the redux toolkit.
    3. Powerful : Because redux is also a powerful tool and when we introduce 
        a new library which is provide more better way to write the redux 
        logic is also very powerful and it's widely used in redux-development 
        across the world
    4. Effective : Because we can perform the task by writing less code and
        by write the less boiler plate so that we can do many things instead
        of stuck to write the redux logic, and it takes the less time to debug
        the application
*/
