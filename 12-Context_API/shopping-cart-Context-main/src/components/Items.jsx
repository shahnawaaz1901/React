import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData"
function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((each)=> <ItemCard name={each.name} price={each.price} id={each.id} key={each.id} qty={each.qty}/>)}
      {/* <ItemCard name="Apple" price={199} /> */}
    </div>
  );
}

export default Items;
