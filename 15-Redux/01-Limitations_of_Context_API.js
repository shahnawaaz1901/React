/*
    ContextAPI : ContextAPI is created by the React team for prevent the 
            prop drilling in the components. HowEver ContextAPI has some
            limitation which is below :

    1. OverUse of Context : In large Application where we have hundreds of
            components we also need to create the multiple context, so in
            large application creating and linking the context with Components
            multiple times, hundred or thousands it creates issue with the
            performance, because of lot of communication between the component
            and Context.

    2. Designed for Static Content : We know that two type of Content exist
            one is static (css files, required images, javascript, hardCoded data)
            and another one is dynamic(user specific data like profile picture).
            Static data we can say is the data which is inside the client application
            and whether dynamic content data is comes from the external sources
            API, databases or server, dynamic content is the content which forces
            the component to change the data. So Context API is not build for the
            dynamic content how ever we can create dynamic applications in small 
            level but at big scale it lags.
    
    3. Re-Render of Context Consumer : Where we create a global state or application 
            state, data is provided to the component suppose we have a global state
            in app component and 4 components A,B,C and D are present and Data is 
            required from B to A component so we sent data from B App component and 
            from App we sent to A, so as soon as state is updated data is required
            only in A component but re rendering will be done in all 4 components
            but why we re render the component which is not required, it also create
            the performance issue in large application because Re rendering of DOM
            is expensive task

    4. Performance : Due to Re rendering of many component and linking the component
            with the context it creates the performance issue

    5. Difficult to Debug : Sometime Context API create confusions and it's hard to
            debug the application.

    6. Difficult to Extends and Scale : Context API is lags to build the huge data
            intensive application because huge applications is highly distributed
            which means some part of server is on another server some part of server 
            is on another server, because using context API it is difficult handle
            the millions or billions users on the daily basis. Context API we can use
            in small and moderate applications but on the huge application
*/
