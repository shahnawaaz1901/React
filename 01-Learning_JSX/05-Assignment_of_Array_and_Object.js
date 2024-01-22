console.log("Script is Connected !");

const students = [
  { name: "Ashu Ansari", age: 22, marks: 8.1 },
  { name: "Toshiba Ansari", age: 21, marks: 7.8 },
  { name: "Nasreena Ansari", age: 24, marks: 8.4 },
  { name: "Sadaf Noor", age: 20, marks: 8.0 },
];

function App() {
  return (
    <>
      <table border="5">
        <caption>List of Students</caption>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Marks</th>
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

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
