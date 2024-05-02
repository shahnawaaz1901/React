// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUATeI0HCmyMvQCdQFtjbWq4gvjWa26h0",
  authDomain: "buy-busy-i-8d2bb.firebaseapp.com",
  projectId: "buy-busy-i-8d2bb",
  storageBucket: "buy-busy-i-8d2bb.appspot.com",
  messagingSenderId: "279601714024",
  appId: "1:279601714024:web:82c91437a58e220cd0bcdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
