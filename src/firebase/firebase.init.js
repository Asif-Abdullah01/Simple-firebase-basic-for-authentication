// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRO1ZFw0lp50XfheaF5ZXJDCtLJSgJSk",
  authDomain: "simple-firebase-2-e43fe.firebaseapp.com",
  projectId: "simple-firebase-2-e43fe",
  storageBucket: "simple-firebase-2-e43fe.firebasestorage.app",
  messagingSenderId: "32496045250",
  appId: "1:32496045250:web:a23d8193ba6335a6a3ff5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

