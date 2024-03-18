import { createContext, useState } from "react";
export const ItemContext = createContext();

/*
  This functional CustomProvider Component will be render automatically because
  we write the opening and closing tag between the children
*/
function CustomProvider(props) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  /*
    props which we are getting inside the argument that's nothing but the all
    the list of children which are wrap inside our this CustomProvider component
    or we can say anything inside the opening and seprate closing tag became the
    children of the component, or we can say all the content between the component
    can be accessed by the props.children
  */
  return (
    <ItemContext.Provider value={{ total, setTotal, item, setItem }}>
      {/*
        Context.Provider is a default provider which helps us to provide the 
        whatEver values we want to pass to the Children Components
      */}
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

export default CustomProvider;
