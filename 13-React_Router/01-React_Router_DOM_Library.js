/*
    We Know that single page application has a challange that's single page 
    application doesn't provide any routing mechanism, so for we need to use
    a third party library called "react-router-dom", Command of installation
    is :

        npm i react-router-dom

    React Router DOM library helps us to provide the mechanism of routing. By
    using the Router here we start to create another folder called pages which
    also contains the components of react but components which need to change
    the route in the URL is available inside the pages folder.

    Or we can say whenever we want to go for a perticular component by the URL
    that component we can say a page because we can access that component by
    using the URL.

    Router : Router is a kind of functionality which allows us to taken place the
        routing mechanism in our Project.

    If we go and check the official Documentation of React Router we can see that
    after v6.4 of React Router below router supports the data API
    
    //* Below Routers Supports the Data API
    1. createBrowserRouter
    2. createMemoryRouter
    3. createHashRouter
    4. createStaticRouter

    //* Below Routers Not Supports the Data API, 
    however working of below routers is almost same as above routers :

    1. <BrowserRouter>
    2. <MemoryRouter>
    3. <HashRouter>
    4. <NativeRouter>
    5. <StaticRouter>


    Using of Router According to the Project :

    1. Web Project :
        Supports Data API
        - createBrowserRouter : CreateBrowserRouter provides full Path URL because 
                    full Path URL is better for Search Engine Optimization.
        - createHashRouter : Whenever we dont require full Path URL we can use create
                    HashRouter
        Do Not Supports Data API
        - <BrowserRouter>
        - <HashRouter>

    2. Testing
        Supports Data API
        - createMemoryRouter
        Do Not Supports Data API
        - <MemoryRouter>

    3. React Native
        - <NativeRouter> //* Data API is not Supported in React Native After v6.4

    Data APIs : While Routing from One Page to Another we Can Pass Data through 
        APIs, this mechanism called Data APIs
*/
