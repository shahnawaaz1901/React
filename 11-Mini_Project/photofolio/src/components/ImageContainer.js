import { useState, useEffect } from "react";
import Loader from "./Loader";
import ImageList from "./ImageList";

export default function ImageContainer(props) {
  const [loaderVisible, setLoaderVisiblity] = useState(true);
  const { dispatch, imageCategory, updateCurrentImage, notify } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisiblity(false);
    }, 1500);
  }, []);
  return (
    <>
      {loaderVisible ? (
        <Loader />
      ) : (
        <ImageList
          dispatch={dispatch}
          imageCategory={imageCategory.name}
          updateCurrentImage={updateCurrentImage}
          notify={notify}
        />
      )}
    </>
  );
}
