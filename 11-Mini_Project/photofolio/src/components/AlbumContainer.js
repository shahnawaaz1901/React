import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase.config";
import Loader from "./Loader";
import AlbumList from "./AlbumList";

function AlbumContainer(props) {
  const [albums, setAlbums] = useState([]);
  const [loaderVisible, setLoaderVisiblity] = useState(true);
  const { dispatch, notify } = props;

  useEffect(() => {
    onSnapshot(collection(db, "albums"), (snapshot) => {
      let data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      setAlbums(data);
      setLoaderVisiblity(false);
    });
  }, []);

  return (
    <>
      {loaderVisible ? (
        <Loader />
      ) : (
        <AlbumList albums={albums} dispatch={dispatch} notify={notify} />
      )}
    </>
  );
}
export default AlbumContainer;
