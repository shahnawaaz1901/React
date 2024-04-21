import { Link } from "react-router-dom";

function Items(props) {
  if (props) {
    console.log(props);
  }
  return (
    <>
      <main>
        <h1>Items Page</h1>
        <Link to="item-1">Go Back</Link>
      </main>
    </>
  );
}

export default Items;
