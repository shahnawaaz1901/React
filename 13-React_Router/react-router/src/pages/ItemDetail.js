import { useParams } from "react-router-dom";
import Items from "../data/Items";
function Item(props) {
  const { itemId } = useParams();
  const item = Items.find((each) => each.id === itemId);
  return (
    <>
      <div>
        <div>This is Individual Item</div>
        {/* Render the Param on the Component */}
        <h1>Item is : {item.title}</h1>
        <h2>Description is : {item.description}</h2>
      </div>
    </>
  );
}

export default Item;
