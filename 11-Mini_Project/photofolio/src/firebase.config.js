// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIWPryzMlQ7sznFewcYbryZV_7U5fwr6A",
  authDomain: "photofolio-5b9f4.firebaseapp.com",
  projectId: "photofolio-5b9f4",
  storageBucket: "photofolio-5b9f4.appspot.com",
  messagingSenderId: "842969136229",
  appId: "1:842969136229:web:f034b7fb4d45a8587b9a8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
