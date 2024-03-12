import { useState, useEffect } from "react";
import Loader from "./Loader";
import ImageList from "./ImageList";

export default function ImageContainer(props) {
  const [loaderVisible, updateLoaderVisiblity] = useState(true);
  const { dispatch } = props;
  const { imageCategory } = props;

  useEffect(() => {
    setTimeout(() => {
      updateLoaderVisiblity(false);
    }, 4000);
  });

  return (
    <>
      {loaderVisible ? (
        <Loader />
      ) : (
        <ImageList dispatch={dispatch} name={imageCategory.name} />
      )}
    </>
  );
}
