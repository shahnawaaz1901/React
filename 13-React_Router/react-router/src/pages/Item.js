import { useParams } from "react-router-dom";
function Item(props) {
  const param = useParams();
  console.log(param);
  return (
    <>
      <div>
        <div>This is Individual Item</div>
        {/* Render the Param on the Component */}
        <h1>Item is : {param.item}</h1>
      </div>
    </>
  );
}

export default Item;
