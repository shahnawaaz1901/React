import { createContext, useContext, useEffect, useState } from "react";
import CartModal from "../components/CartModal";
export const ItemContext = createContext();

/*
  This functional CustomProvider Component will be render automatically because
  we write the opening and closing tag between the children
*/
function CustomProvider(props) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]); //* For Storing the Products inside Cart

  /* 
    Here we are only getting the price but instead of price we need to store 
    whole variable so that we can show the item detail on the cart page and
    as well as our total functionality works perfectly
  */
  const handleAdd = (pro) => {
    /* 
      We Only put item inside the cart array when a new item is added to cart 
      in case of existing item we need to increase the quantity instead of adding
      new item
    */

    //* Check is item is present or not inside the array
    const checkForPresence = cart.findIndex((p) => pro.id === p.id);

    //* In Case item not Present
    if (checkForPresence === -1) {
      /* 
        Along with Storing we need another variable called qty which represent the 
        Quantity of that product inside the cart 
      */
      setCart([...cart, { ...pro, qty: 1 }]);
    } else {
      const copyCart = [...cart];
      copyCart[checkForPresence].qty += 1;
      setCart(copyCart);
    }
    setItem(item + 1);
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0));
  }, [cart]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  const handleRemove = (id) => {
    /* 
      setTotal also written in the two form one is directly pass the value 
      and another one is by a callback function which takes state as argument
      and whatEver value we return that value is set to the state
    if(total){
      setTotal(total - price)
    }
    */
    const checkForPresence = cart.findIndex((each) => each.id === id);
    if (checkForPresence === -1) {
      return;
    }

    const copyCart = [...cart];
    copyCart[checkForPresence].qty--;
    /* If quantity is zero then we don't need that product inside the cart */
    if (!copyCart[checkForPresence].qty) {
      copyCart.splice(checkForPresence, 1);
    }
    setCart(copyCart);
    setItem(item - 1);
    // setTotal((prevState) => (prevState <= 0 ? prevState : prevState - price));
    // setItem((prevState) => (prevState <= 0 ? prevState : prevState - 1));
  };

  /*
    props which we are getting inside the argument that's nothing but the all
    the list of children which are wrap inside our this CustomProvider component
    or we can say anything inside the opening and seprate closing tag became the
    children of the component, or we can say all the content between the component
    can be accessed by the props.children
  */

  /* Reset the Values of total and Items */
  /* Instead of this we can use resetCart to reset the total and cart */
  // const resetValues = () => {
  //   setTotal(0);
  //   setItem(0);
  // };

  const resetCart = () => {
    setCart([]);
    setItem(0);
  };
  /* 
    Because we write handleAdd and handleRemove inside this context file we dont 
    need to pass both the function inside the object in value attribute 
  */
  /* 
    Because we only want toggleCart function inside the CartModal so instead of 
    passing using the context in value attribute we directly pass as props
  */

  return (
    <ItemContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        toggleCart,
        cart,
        resetCart,
      }}
    >
      {/*
        Context.Provider is a default provider which helps us to provide the 
        whatEver values we want to pass to the Children Components
      */}
      {showCart ? <CartModal toggleCart={toggleCart} /> : ""}
      {props.children}
      {/* 
        Because we wrap the all the children inside the functional component 
        so whatEver content we write here will be the render in the browser
        instead of all the children which we wrote inside the opening and closing
        component
      */}
    </ItemContext.Provider>
  );
}

function useValue() {
  return useContext(ItemContext);
}

export { useValue };
export default CustomProvider;
