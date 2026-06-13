// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_R9-Nsc3JoT3M4ZMIaMxwZcAjfYFhYDA",
  authDomain: "beneportfolio-79ed3.firebaseapp.com",
  projectId: "beneportfolio-79ed3",
  storageBucket: "beneportfolio-79ed3.firebasestorage.app",
  messagingSenderId: "257279804136",
  appId: "1:257279804136:web:1f50cd5d363ce9b595bf5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize FireStore
export const db = getFirestore(app);