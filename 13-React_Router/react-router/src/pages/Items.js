import { Link } from "react-router-dom";
import Item from "../data/Items";
function Items(props) {
  return (
    <>
      <main>
        <h1>Items Page</h1>
        {Item.map((each, index) => (
          <Link to={each.id} key={index}>
            {each.title}
            <br />
          </Link>
        ))}
      </main>
    </>
  );
}

export default Items;
