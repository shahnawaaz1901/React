/*
    In a Single Page Application suppose we have a navbar and according to the
    navbar click page component is changed by the conditional rendering but all
    the time component is changes or re-render our URL is remains same for all
    the components, this is ok in small application but in huge application where
    thousands of components is exist we can't say this is a good approach because
    we can't go for a perticular component directly how ever we can go with URL
    but in single page application our page is only one and components inside that
    page is changed, If we use this approach in huge application we can't go for
    a component directly every time we need to open first home page and from home
    page go for next components and then next vice versa..

    We can fix this issue by using a Mechanism in which we can directly open a 
    component by URL by using the Routing feature React Provides.

    Routing : Routing is nothing but go for one page to another page in a web 
    application.

    Two Types of Routing Exist :

    1. Server Side Routing : Server side routing generally used in Multi Page 
                Application. In Server Side Routing when ever we open a webpage
                in our browser a HTTP request sent to the server and server serves
                a HTML document corresponding to that request and another HTML
                page is return by the server if we make another request to the 
                server.

    2. Client Side Routing : Client Side Routing Generally used in Single Page
                Application. Client Side routing done via the browser in which
                when ever we open app for the first time only that time request
                is gone for the server and server returns a HTML document contains
                all the static files pr assets and javascript files because in 
                single page application we works with Javascript because we not 
                sent the request to the server every time we sent request only one 
                time, and whenever we open another component inside that web page 
                that component is serves via tha browser, this is the Client Side 
                Routing

    HowEver React doesn't provide any mechanism to manage the routing inside a
    React Single Page Application, but an external library called 
    "React-Router-DOM" is exist which provides us this mechanism to achieve 
    routing in React Single Page Application.
*/
