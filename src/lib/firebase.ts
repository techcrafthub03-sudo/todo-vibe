
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "todo-vibe-7a533",
  appId: "1:930166065949:web:10c9e15389bb306371aff4",
  storageBucket: "todo-vibe-7a533.appspot.com",
  apiKey: "AIzaSyDZUwHX7KahCiz4tu0AjrE6tVzpqSaa-Hg",
  authDomain: "todo-vibe-7a533.firebaseapp.com",
  messagingSenderId: "930166065949",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
