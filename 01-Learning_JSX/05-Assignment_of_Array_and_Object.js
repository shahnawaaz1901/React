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
          {/* 
            No Metter we have inside the thead tag we need to put heading in tr tag and
            devide table into multiple parts where thead is the heading and tbody is the
            content of table and tfoot is the represent the footer where we calculate or
            resolve some value
            */}
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              /* 
                If we want to can create an id property in object so that instead 
                of giving index as the key we can given the key using objectName.properties
            */
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
