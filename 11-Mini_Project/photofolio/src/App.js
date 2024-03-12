import NavBar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import { useReducer } from "react";

import "./App.css";
import ImageContainer from "./components/ImageContainer";
function App() {
  function reducer(state, action) {
    const { payload } = action;
    switch (action.type) {
      case "images": {
        return payload.name;
      }
      case "albums": {
        return "";
      }
      default: {
        return;
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, "");
  return (
    <>
      <NavBar dispatch={dispatch} />
      {state ? (
        <ImageContainer dispatch={dispatch} imageCategory={state} />
      ) : (
        <AlbumList dispatch={dispatch} />
      )}
    </>
  );
}

export default App;
