import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB_wkIexF66XOyZRgH-AsoZeeilHAI0pc",
  authDomain: "todolist-e10a4.firebaseapp.com",
  projectId: "todolist-e10a4",
  storageBucket: "todolist-e10a4.appspot.com",
  messagingSenderId: "309695189792",
  appId: "1:309695189792:web:baceb69bdc27595073bd45",
  measurementId: "G-KED4BBLXWJ",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
