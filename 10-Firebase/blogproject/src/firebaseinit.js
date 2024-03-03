// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // For Firebase
import { getFirestore } from "firebase/firestore"; // For FireStore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPViO1BciO13mqCuNo3v_v1W8TgRBOqTU",
  authDomain: "blogging-app-2b5db.firebaseapp.com",
  projectId: "blogging-app-2b5db",
  storageBucket: "blogging-app-2b5db.appspot.com",
  messagingSenderId: "1053914385668",
  appId: "1:1053914385668:web:33e667068310fa4f841451",
};
/* 
    Sometimes firebase thrown permission or restriction Error that 
    Error we can fix by change the Rules into the Firestore database
    Rules section where we can change rules with this :

    rules_version = '2';

    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
                allow read, write: if request.time > timestamp.date(2020, 9, 10);
            }
        }
    }
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireStore and Get a Reference to the Service
export const db = getFirestore(app);
