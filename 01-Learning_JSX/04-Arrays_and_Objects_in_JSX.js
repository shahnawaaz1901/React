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

function App() {
  return (
    <>
      <h1>Learn Arrays and Object Usage in JSX</h1>
      <h1>List of Popular Cars in the India</h1>
      {cars.map((every) => (
        <li>{every}</li>
      ))}
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
