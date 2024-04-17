import NavBar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import { useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ImageContainer from "./components/ImageContainer";
import CurrentImage from "./components/CurrentImage";

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
  const [currentImageURL, setCurrentImageURL] = useState("");

  function updateCurrentImage({ e, imageURL: url }) {
    if (e.target.getAttribute("alt") === "delete-btn") {
      return;
    }
    setCurrentImageURL(url);
  }

  function resetCurrentImage() {
    setCurrentImageURL("");
  }
  return (
    <>
      <NavBar dispatch={dispatch} />
      {state ? (
        <ImageContainer
          dispatch={dispatch}
          imageCategory={state}
          notify={notify}
          updateCurrentImage={updateCurrentImage}
        />
      ) : (
        <AlbumList dispatch={dispatch} notify={notify} />
      )}
      {currentImageURL ? (
        <CurrentImage
          imageLink={currentImageURL}
          resetCurrentImage={resetCurrentImage}
        />
      ) : (
        ""
      )}
      <ToastContainer />
    </>
  );
}

export default App;
