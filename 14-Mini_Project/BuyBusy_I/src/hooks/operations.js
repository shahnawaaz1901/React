import db from "../config/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
export function useDatabaseOperations() {
  async function addData(collectionName, data) {
    return await addDoc(collection(db, collectionName), data);
  }
  async function getData(collectionName) {
    const documentReference = doc(collection(db, collectionName));
    return getDoc(documentReference)
      .then((doc) => {
        return doc;
      })
      .catch((err) => {
        return err;
      });
  }
  return { addData, getData };
}
