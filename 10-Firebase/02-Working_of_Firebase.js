/*
    Firebase Offers two Databases : 

    

    1. RealTime Database
    2. Cloud FireStore(New Addition of Firebase)

    Both the Databases are Real Time Databases .Only difference in both the 
    Databases is how data is stored inside the database, In Realtime Database
    Data is stored in the JSON format but in the Cloud Firebase Data is stored
    in the Document format. Realtime Database Provides us low latency because
    of tree kind of structure and Cloud firestore offers us faster queries and
    scales further than the real time database
*/

/*
    Data Modeling in cloud fireStore : We can understand cloud firestore data
        modeling in simple example : Suppose we have a file that file is called
        the collection inside the file we have many papers tha is documents 
        and in the papers what ever information is written or have its data 
*/

/*
    How RealTime Database works : In RealTime Databases connection are 
        bidirectional but how because when we load a webpage then a connection
        between client and server is created and that connection is created
        by the WebSocket, that's why we can see the changes in RealTime because
        an eventListener along with a callback function is present on client 
        side and as well as server side that event listener invoked when ever 
        something getting changed in database of something is changed by the 
        user, now question is how user entered data is sent to the server and 
        store it into database, All is done by using the local cache whenever a 
        user added something on their side that data is stored into the local 
        cache Ans as soon as local data is stored into the localcache as event 
        is triggered which notify the database that user has entered new data 
        to the database and all the data is stored into the firebase and as soon
        as data is stored into the firebase process triggered another event and
        all the devices which are connected to the webpage , new data is stored 
        into their localcache and data is visible to that users screen
*/

/*
    Offline support : Becuase in the case of firebase we directly not sent the 
        data to the database first we store the data into the localcache after 
        that whatever data we added is gone to database, in case we have offline
        and we dont have any internet connection in that case our data is stored
        inside the localcache and whenever our internet connection is getting 
        resumed what ever data which is newly stored into the localcache is stored
        inside the firebase.
*/
