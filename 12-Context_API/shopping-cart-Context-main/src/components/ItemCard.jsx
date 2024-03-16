import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import TotalContext from "../contexts/total.context";
import ItemContext from "../contexts/item.context";

function ItemCard({ name, price }) {
  const {total, setTotal} = useContext(TotalContext);
  const {item, setItem} = useContext(ItemContext);
  
  const handleAdd = () => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = () => {
    /* 
      setTotal also written in the two form one is directly pass the value 
      and another one is by a callback function which takes state as argument
      and whatEver value we return that value is set to the state
    if(total){
      setTotal(total - price)
    }
    */

    setTotal((prevState)=> prevState <= 0 ? prevState : prevState - price)
    setItem((prevState)=> prevState <= 0 ? prevState : prevState - 1);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
