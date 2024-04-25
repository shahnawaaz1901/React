//* Packages
import { useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* Internal Modules
import NavBar from "./components/Navbar";
import "./App.css";
import ImageContainer from "./components/ImageContainer";
import CurrentImage from "./components/CurrentImage";
import AlbumContainer from "./components/AlbumContainer";

function App() {
  function reducer(state, action) {
    const { payload } = action;
    switch (action.type) {
      case "images": {
        //* Means user Click on Some Album so state Value Change to that Album Name
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

  /* 
    message and type is two arguments for the notify function so we can modify 
    the message and as well as the styling of message according which type of
    message user want to render
  */
  function notify(message, type) {
    if (!type) {
      toast(message);
    } else if (type === "delete") {
      toast.error(message);
    } else if (type === "warn") {
      toast.warn(message);
    }
  }

  /* 
    Instead of useState we use the useReducer because we manipulate the state 
    from multiple functions 
  */
  const [state, dispatch] = useReducer(reducer, "");
  const [currentImageURL, setCurrentImageURL] = useState("");

  /* 
    When we Click on an Image, image Should be Render on 80% of Our Screen
  */
  function updateCurrentImage({ e, imageURL: url }) {
    //* If we Click on Update on Click Button Image Shouldn't render on Screen
    if (
      e.target.getAttribute("alt") === "delete-btn" ||
      e.target.getAttribute("alt") === "update-btn"
    ) {
      return;
    }
    setCurrentImageURL(url);
  }

  //* For Remove the Current Image Which is Render on 80% of our Screen
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
        <AlbumContainer dispatch={dispatch} notify={notify} />
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
