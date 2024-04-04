import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";

function App() {
  const [currPage, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} />
      {currPage === "home" && <Home />}
      {currPage === "about" && <About />}
      {currPage === "items" && <Items />}
    </>
  );
}

export default App;
