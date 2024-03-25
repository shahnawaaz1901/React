import React from "react";
import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { ItemContext } from "../contexts/item.context";
import { useValue } from "../contexts/item.context";

function ItemCard({name, price }) {
  const {handleAdd, handleRemove} = useValue();
  /* Moving All the Handle Ful Logic inside the Context file
  const handleAdd = () => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = () => {
     
      setTotal also written in the two form one is directly pass the value 
      and another one is by a callback function which takes state as argument
      and whatEver value we return that value is set to the state
    if(total){
      setTotal(total - price)
    }
    

    setTotal((prevState)=> prevState <= 0 ? prevState : prevState - price)
    setItem((prevState)=> prevState <= 0 ? prevState : prevState - 1);
  };
*/
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
