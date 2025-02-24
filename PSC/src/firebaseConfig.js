// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw724idGyuuaRV232VmymBOxKx8quFxG0",
  authDomain: "react-todo-firebase-f9e16.firebaseapp.com",
  projectId: "react-todo-firebase-f9e16",
  storageBucket: "react-todo-firebase-f9e16.firebasestorage.app",
  messagingSenderId: "683763035805",
  appId: "1:683763035805:web:237ffae91b06d16df1ee74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default app;