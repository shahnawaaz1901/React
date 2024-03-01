/*
    Firebase Cloud FireStore : As Name suggest it's using the cloud service
            So that it's the combination of Google Cloud and firebase so that 
            we can use firebase as database and use the google cloud for the
            cloud Storage. It's the RealTime Database and it's also provide
            us offline support mean while we can use database offline in our
            system by taking the space of our disk storage and use it for the
            persistent storage
*/

/*
    Difference Between Normal and Real Time Database :

    Normal Databases : Suppose we have a server which serves pages as per 
            requested, and server is Connected via Database in which our blog 
            App Data is stored, now suppose we opened our blog app in three
            devices and one of them device send request to server to create
            new blog b server process that request and store that blog b into
            the database then server will respond and page is re render and
            new blog is visible to that user but other users which already 
            available on the web page that users need to refreshed the page
            to see the latest blog b which is created by the other user, so in
            this case new blogs are visible to all users but only when all
            users is refreshed the page except the user who created the blog 
            because that page is already re render when that user sends request
            to the server, This is Normal kind of Database.

    RealTime Databases : We take same example like above we have a server 
            which serves our blog app and all our blog data is stored inside 
            the database. Now three users is sends request to the server and
            server respond all the three users and blogs is render on all 
            devices and if one of them user sends request to the server and 
            create new blog or delete new blog then server will processed the 
            request to the database and then server response and re render the 
            page but in the case of RealTimeDatabases all the remaining users
            which currently opened the our chat application will be notified 
            that new blog is added of blog is deleted because connection in 
            this case are bi directional but in the normal case connction are 
            only single direction not the bi directional, and new blog is render
            on the every user screen and we dont need to refresh the page .
            this kind of databases is used when we required real time support 
            like in chat application whatsapp and messenger where our screen
            not require to be refreshed. in technical term all the devices 
            are synchronously connected to the Server.
*/
