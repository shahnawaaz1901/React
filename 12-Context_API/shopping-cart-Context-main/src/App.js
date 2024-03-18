import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import CustomProvider from "./contexts/item.context";
// import ItemContext from "./contexts/item.context";

/*
  by using the Context we need to noticed one thing that our context is written
  somewhere data is retrieved from somewhere and data is manipulated somewhere
  again and again these kind of task we performed for every context, so this leads
  bugs and inconsistency in our app, so for this React Provides us something called
  custom Providers which helps us prevent the Redundant data and it's just like
  the custom Hooks which we can create for saving time and repitative work
*/
function App() {
  return (
    <CustomProvider>
      <div className="App">
        <h2>Shopping Cart</h2>
        {/* 
        Because Currently we dont Pass any data flow from One Context to Another
        so we can write any context on upper and inner boundary of Components ,
        currently context which we have are related to each other so if we want
        we can pass using only one Context Boundary, how ever we have also 
        permission to pass the seprate context to the some certain components
      */}
        <Navbar />
        <Items />
      </div>
    </CustomProvider>
  );
}
export default App;
