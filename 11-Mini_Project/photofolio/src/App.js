import NavBar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import { useReducer } from "react";

import "./App.css";
import ImageList from "./components/ImageList";
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
        <ImageList dispatch={dispatch} />
      ) : (
        <AlbumList dispatch={dispatch} />
      )}
    </>
  );
}

export default App;
