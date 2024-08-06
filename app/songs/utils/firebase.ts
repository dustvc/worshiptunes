// utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVQhLTK7cRhgwiexX96mrqbD9fUtzh9w",
  authDomain: "chordgo-385b9.firebaseapp.com",
  projectId: "chordgo-385b9",
  storageBucket: "chordgo-385b9.appspot.com",
  messagingSenderId: "107608188297",
  appId: "1:107608188297:web:060c9fb0ae8653dbf32d58",
  measurementId: "G-FWWLZ4PXMH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
