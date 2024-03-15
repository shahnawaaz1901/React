import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import TotalContext from "./contexts/total.context";
function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <TotalContext.Provider value={{ total, setTotal, item, setItem }}>
        <Navbar />
        <Items />
      </TotalContext.Provider>
    </div>
  );
}
export default App;
