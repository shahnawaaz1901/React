//* Using Older React Version
// const jsxElement = (
//   <React.Fragment>
//     <h1>About React</h1>
//     <p>Feature of React</p>
//     <ul type="disc">
//       <li>Virtual DOM</li>
//       <li>Conviniet Way to Write Code</li>
//       <li>React is Declarative</li>
//     </ul>
//   </React.Fragment>
// );

//* Using Latest React Version
const jsxElement = (
  <>
    <h1>About React</h1>
    <p>Feature of React</p>
    <ul type="disc">
      <li>Virtual DOM</li>
      <li>Conviniet Way to Write Code</li>
      <li>React is Declarative</li>
    </ul>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
