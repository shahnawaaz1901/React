console.log("Script is Connected !!");

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

function App() {
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
