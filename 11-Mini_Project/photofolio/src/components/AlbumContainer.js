//* Package
import { useState, useEffect } from "react";
import { onSnapshot, collection, addDoc } from "firebase/firestore";

//* Internal Modules
import db from "../firebase.config";
import Loader from "./Loader";
import AlbumList from "./AlbumList";

function AlbumContainer(props) {
  const collectionName = "albums";
  const [albums, setAlbums] = useState([]);
  const [loaderVisible, setLoaderVisiblity] = useState(true);
  const { dispatch, notify } = props;

  useEffect(() => {
    onSnapshot(collection(db, collectionName), (snapshot) => {
      let data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      setAlbums(data);
      setLoaderVisiblity(false);
    });
  }, []);

  async function newAlbum(albumName) {
    const data = {
      name: albumName,
      createdOn: new Date(),
    };
    await addDoc(collection(db, collectionName), data);
    notify("Album Created Successfully !!");
  }

  return (
    <>
      {loaderVisible ? (
        <Loader />
      ) : (
        <AlbumList
          albums={albums}
          dispatch={dispatch}
          newAlbum={newAlbum}
          notify={notify}
        />
      )}
    </>
  );
}
export default AlbumContainer;
