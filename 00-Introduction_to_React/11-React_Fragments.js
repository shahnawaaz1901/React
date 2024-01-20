console.log("Script is Connected !!");

/* 
    If we want to assign Multiple tags using the jsx expression then it
    will thrown an Error one tag in jsx is called one expression it's not
    Possible because in Javascript or any other language we can't assign
    two values separated by space in any language eg.:
        const a = 3 4
    We Can't Assign Both Values in a, if we want to assign multiple things
    then we need to create an array or object where we created a seprate
    memory by using the indexing and prperties of Objects.
*/

/*
    Like in Normal Javascript we can't assign multiple expression into a 
    single variable also need to contain multiple expression into a single 
    element using the parent element means we need to contains all the 
    expression into a parent element so that we can able assign multiple
    expression into a variable, this is called fragments in React.
    In React fragments if we want to add multiple expression then we need
    to add all the expression into a single tag so that we able to add 
    multiple expression into a single variable
*/
/* 
    But if we use like this means we create a parent div and assign it to 
    root div but why we add extra unnecessory div to our root element
*/
// const jsxElement = (
//   <div>
//     <h1>React JSX</h1>
//     <p>This is A Paragraph</p>
//   </div>
// );
/* 
    So instead of above we can create jsx element using React.Fragment 
    so that there is no extra layer of tags is added to HTML document 
*/
/* 
    Here instead of div we create a parent Element called React.Fragment 
    which allows us to add multiple expression withOut any extra layer of 
    tags 
*/
// const jsxElement = (
//   <React.Fragment>
//     <h1>React JSX</h1>
//     <p>This is A Paragraph</p>
//   </React.Fragment>
// );
/*
    Like Above Example this React.Fragment is used as parent tag it's used 
    in older version of React, so for latest version we need to just create 
    a parent tag withOut giving any name so that when we add that element to 
    the ReactDOM then there is no extra wrapper or tag 
*/

//* React Fragement in the Latest Version React
/* 
    Because React and JSX not allows us to create adjacent element withOut 
    a parent element 
*/
const jsxElement = (
  <>
    <h1>React JSX</h1>
    <p>This is A Paragraph</p>
  </>
);

//* Append Element using ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
