//** Javascript **//

const newElement = document.createElement("h2");
newElement.textContent = "Hello World ";
newElement.className = "Header";

document.getElementById("root").append(newElement);
/* Print a DOM Node of Element */
console.log(newElement);
//** REACT **//
/* 
    Instead of document.createElement we write the React.createElement which 
    takes the three argument first is tag name, second is object which contains
    all the attribute classes id of that tag and last is text or whatever inside
    content of that tag, two parameters are mendatory if we don't want any
    attribute then we can pass null and we can skip the textContent because that
    is optional and we can put the text content in the second options argument as
    children property
*/
//* Create React Element
const reactHeading = React.createElement(
  "h1",
  { className: "Header", id: "reactHead", children: "Hello React" }
  //   "Hello React !!" //*Skip this argument and pass textCotent in the children
);
/* 
    Print the React Object which contains the multiple properties but in a props 
    property that property contains all class name is and text content of related 
    to tag 
*/
console.log(reactHeading);
//* Append reactHeading using ReactDOM
/* 
    This ReactDOM is Virtual DOM and this is the One of the Most important feature 
    of React which improves performance of React apps and Make React apps highly 
    Efficient
*/
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
