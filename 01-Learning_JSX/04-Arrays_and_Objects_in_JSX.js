console.log("Script is Connected !!");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const obj = {
  name: "Ashu Ansari",
  age: 22,
  standard: "B.Tech. Final Year",
};

const cars = ["Audi", "Nexa", "BNW", "Ertica", "Innova"];
/* 
    If we want to access elements of arrays using for loop or while loop to 
    render the elments on to the browser, then we can do it but one twist is 
    we can't use the for loop inside the React, because for loop doesn't return
    anything and in "JSX" if something not return anything then is useless 
    because undefined and null values not render in JSX
*/

/* 
    In React, Array and list is interchangably is used and it's same means
    continous block of data, in javascript it's hetrogenous other programming
    langauges array or list is homogenous
*/

function App() {
  return (
    <>
      <h1>Learn Arrays and Object Usage in JSX</h1>
      <h1>List of Popular Cars in the India</h1>
      <ul>
        {/* 
            If we Simply write li tags withOut giving any key then React will shows a 
            warning that list must contains a unique key this warning is appear only 
            in react not is html, css and js because react wants a unique key for every 
            li so that we can able to manipulate a perticular element, so for prevent 
            this warning we need to set props keys which is not an attribute of html but
            it's a property which we need to define in every li tag, one thing we need
            to keep in mind that's key must be unique

            {cars.map((every) => (
            <li>{every}</li>
            ))} */}
        {cars.map((car, index) => {
          return <li key={index}>{car}</li>;
        })}
      </ul>
      {/* 
        Because map function traverse to whole array and return an array which
        relate to each and every element of the array, that's why we use the
        map function here
        */}
      {/* {arr.map((i, index) => {
        if (i % 2 == 0) {
          return <p>{i}</p>;
        }
      })} */}
      {/* 
        In JSX whole Object of javascript is not render because object can't 
        be a child of ReactDOM, But if we want to render object in JSX then
        we can do it using the dot operator and access the properties of Object
        and render it easily on the browser in React, how Ever we can render
        the arrays and elements of arrays in React

        Thrown Error because render object directly on the Browser
        <h2>{obj}</h2>
    */}
      {/* <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
      <h2>{obj.standard}</h2> */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
