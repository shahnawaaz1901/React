/*
    So far we have created descent apps using the React and we also 
    store the data in the localStorage which is also browser provided
    API, but when we refreshed the page all the Data which we Created
    is lost why, because we are not storing the data into the persistent
    storage our data is stored in RAM which is not persistent so for
    persistently stored data we use the database , so that we persist 
    all the data and our data is not destroyed when ever we refresh or
    close the app
*/

/*
    Broadly Database is two types : 
    1. Relational Databases or Sequal Databases :
        In Relational Databases data is stored in the tabular manner or 
        we can simplify by calling that data is stored into table format
        which is nothing but Row and Columns, one reason we say this kind
        of databases to relational Databases because suppose we have two
        tables student and class then we can add relationShips between both
        by using the "foreign key".HowEver NonRelational Database Also comes
        with Some Relationships define. Relational Databases are managed by
        the language which is "SQL - Structured Query Language".
        These kind of databases are hard to scale and takes more space into
        the disk.
    
    2. No-SQL Databases :
        This kind of Databases can be managed not only by the SQL but the 
        other query languages, and because we also define relationships into
        these kind of databases that's why we can't say this is a Non-Relational
        Databases, and some Databases in these categories not supported the 
        SQL. These kind of databases not store data into table row-column 
        format but into multiple formats like graphs, documents and object
        (Key_pair values). These kind of databases are scalable and efficient.
        In now days No-SQL Databases are more popular over relational Databases,
        but we can choose database by the Application Requirement

        Database List According to Format which they Stored data :
        1. Graph : Amazon Neptune
        2. Object : Reddis
        3. Document : MongoDB, Firebase cloud fireStore

*/

/*
    We use Firebase in Our course but now question is why we use the firebase 
    and not the other databases answer of this question is :
    1. Firebase offers very simple querying logic.
    2. Firebase offers us serverless solution
*/
