import NavBar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import { useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  function notify(message) {
    toast(message);
  }

  const [state, dispatch] = useReducer(reducer, "");
  return (
    <>
      <NavBar dispatch={dispatch} />
      {state ? (
        <ImageContainer
          dispatch={dispatch}
          imageCategory={state}
          notify={notify}
        />
      ) : (
        <AlbumList dispatch={dispatch} notify={notify} />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
