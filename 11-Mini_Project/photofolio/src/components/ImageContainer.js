//* Packages
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";

//* Internal Modules
import Loader from "./Loader";
import ImageList from "./ImageList";
import db from "../firebase.config";

export default function ImageContainer(props) {
  const [loaderVisible, setLoaderVisiblity] = useState(true); //* Loader Visiblity For Image
  const { dispatch, imageCategory, updateCurrentImage, notify } = props;
  const [images, setImages] = useState([]); //* For Storing the Image Which is Retrieved from Album

  useEffect(() => {
    //* Instead of Fetching getDoc we use onSnapshot for Real Time Updates
    onSnapshot(collection(db, imageCategory.name), (snapshot) => {
      let data = [];
      snapshot.forEach((each) => {
        data.push({ id: each.id, ...each.data() });
      });
      data = data.sort((a, b) => (a.title > b.title ? 1 : -1));
      setImages(data); //* Set the Images when Image is Retrieved
      setLoaderVisiblity(false); //* Loader Should be Hide when Images is Loaded
    });
  }, []);

  return (
    <>
      {/* Conditional Rendering */}
      {loaderVisible ? (
        <Loader />
      ) : (
        <ImageList
          dispatch={dispatch}
          imageCategory={imageCategory.name}
          updateCurrentImage={updateCurrentImage}
          notify={notify}
          images={images}
        />
      )}
    </>
  );
}
