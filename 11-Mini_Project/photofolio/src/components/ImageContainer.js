//* Packages
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";

//* Internal Modules
import Loader from "./Loader";
import ImageList from "./ImageList";
import db from "../firebase.config";

export default function ImageContainer(props) {
  const [loaderVisible, setLoaderVisiblity] = useState(true);
  const { dispatch, imageCategory, updateCurrentImage, notify } = props;
  const [images, setImages] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, imageCategory.name), (snapshot) => {
      let data = [];
      snapshot.forEach((each) => {
        data.push({ id: each.id, ...each.data() });
      });
      data = data.sort((a, b) => (a.title > b.title ? 1 : -1));
      setImages(data);
      setLoaderVisiblity(false);
    });
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
          images={images}
        />
      )}
    </>
  );
}
