import db from "../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
export function useDatabaseOperations() {
  async function addData(collectionName, data) {
    return await addDoc(collection(db, collectionName), data);
  }
  async function getData(collectionName) {
    const collectionReference = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionReference);
    const data = [];
    querySnapshot.forEach((val) => {
      data.push({ ...val.data(), id: val.id });
    });
    return data;
  }

  async function getUserByEmail(collec, email) {
    const queryRef = query(collection(db, collec), where("email", "==", email));
    const querySnap = await getDocs(queryRef);
    let doc;
    querySnap.forEach((val) => {
      doc = { ...val.data(), id: val.id };
    });
    return doc;
  }
  return { addData, getData, getUserByEmail };
}
