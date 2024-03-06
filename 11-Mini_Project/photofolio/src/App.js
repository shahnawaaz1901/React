import NavBar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import "./App.css";
import { useReducer } from "react";
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
      <NavBar />
      {state ? "" : <AlbumList dispatch={dispatch} />}
    </>
  );
}

export default App;
