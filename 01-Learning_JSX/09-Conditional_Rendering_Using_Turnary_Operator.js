console.log("Script is Connected !");
const number = prompt("Please Enter a Number ");
function Car() {
  const cars = [
    {
      name: "Audi",
      body: "Sadan",
      wheel: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhbLGVAC6kXBA3brKa5C8CNEOam9zipUfSQcWjIvUiQ&s",
    },
    {
      name: "BMW",
      body: "Premium",
      wheel: 4,
      image:
        "https://www.shutterstock.com/image-photo/seattle-washington-usa-march-31-600nw-2284495465.jpg",
    },
    {
      name: "Jaguar",
      body: "Premium",
      wheel: 4,
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/XF/8670/Jaguar-XF-2.0-Petrol-R-Dynamic-S/1635170619851/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    },
  ];

  return (
    <>
      <table border="4">
        <caption>
          <h1>Car Details</h1>
        </caption>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Car Body</th>
            <th>Car Wheel</th>
            <th>Car Image</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.name}</td>
              <td>{car.body}</td>
              <td>{car.wheel}</td>
              <td>
                <img src={car.image} alt="Car Image" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Student() {
  const students = [
    { name: "Ashu Ansari", age: 22, marks: 8.1 },
    { name: "Toshiba Ansari", age: 21, marks: 7.8 },
    { name: "Nasreena Ansari", age: 24, marks: 8.4 },
    { name: "Sadaf Noor", age: 20, marks: 8.0 },
  ];
  return (
    <>
      <table border="5">
        <caption>List of Students</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function App() {
  /* 
    Use the Turnary Operator for Conditional Based Rendering  
    */
  return number > 10 ? <Car /> : <Student />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
