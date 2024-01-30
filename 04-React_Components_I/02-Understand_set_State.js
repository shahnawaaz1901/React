/*
    setState : setState is used to update the states in React so that states 
            able to render on the screen withOut re-render the main  App component
*/

/*
    Asynchronous in Nature : setState is also asynchronous in nature, Now question 
            is what is asynchronous, asynchronous means not blocking the main thread
            of javascript if some operation takes time then put that task in micro task
            or task queue and executes the remaining code. Before React 16 setState
            is synchronous in nature but it made more problems because of AJAX requests
            Because of asynchronous nature setState takes another callback function
            which triggered when setState is updated value successfully
*/

/*
    Batch in setState : suppose if we make call sequentially multiple times then react
            converts all calls into the one call and call which we made at the last among
            all the calls is executed and before last call every call is rejected, so we
            can say batching is the reject the start calls and just call the last setState
            function so that after we update the state component is not render multiple
            times again and again, this is happened only in Ist form of setState which 
            takes the object as parameter, and Second form which takes a callback is doing
            the opposite work however rendering is only happen once but setState function
            call every time because remember we take prevState as the argument in the function
            so if we write 0.5 total 4 times then on browser we can see increasing of 2.0
            unlike the Ist form in which only last call is executes, because of taken the
            preState as argument everycall of setState is acceptable and every state is put
            inside the queue and one by one setState function is executes
*/
