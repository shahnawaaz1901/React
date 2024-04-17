import { useState, useEffect } from "react";
import Loader from "./Loader";
import ImageList from "./ImageList";

export default function ImageContainer(props) {
  const [loaderVisible, updateLoaderVisiblity] = useState(true);
  const { dispatch, imageCategory, updateCurrentImage, notify } = props;

  useEffect(() => {
    setTimeout(() => {
      updateLoaderVisiblity(false);
    }, 1500);
  });

  return (
    <>
      {loaderVisible ? (
        <Loader />
      ) : (
        <ImageList
          dispatch={dispatch}
          name={imageCategory.name}
          updateCurrentImage={updateCurrentImage}
          notify={notify}
        />
      )}
    </>
  );
}
