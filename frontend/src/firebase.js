/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWfNEH8SHm7ROG43hUCSgsAjYUnF1rjts",
  authDomain: "plateshare-4fb89.firebaseapp.com",
  projectId: "plateshare-4fb89",
  storageBucket: "plateshare-4fb89.firebasestorage.app",
  messagingSenderId: "436079838437",
  appId: "1:436079838437:web:bd1f2b9f431401673e000c",
  measurementId: "G-0C75GQ1BCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);*/

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your Firebase config (KEEP IT PRIVATE!)
const firebaseConfig = {
  apiKey: "AIzaSyBWfNEH8SHm7ROG43hUCSgsAjYUnF1rjts",
  authDomain: "plateshare-4fb89.firebaseapp.com",
  projectId: "plateshare-4fb89",
  storageBucket: "plateshare-4fb89.firebasestorage.app",
  messagingSenderId: "436079838437",
  appId: "1:436079838437:web:bd1f2b9f431401673e000c",
  measurementId: "G-0C75GQ1BCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore database

// Export Firebase functions
export { createUserWithEmailAndPassword, setDoc, doc };
export default app;


