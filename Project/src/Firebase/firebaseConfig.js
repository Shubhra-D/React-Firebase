// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnxsQvN0xFMCkBFvQrR4M_xY1U4TL6-zQ",
  authDomain: "social-media-project-acf57.firebaseapp.com",
  projectId: "social-media-project-acf57",
  storageBucket: "social-media-project-acf57.firebasestorage.app",
  messagingSenderId: "1050316658477",
  appId: "1:1050316658477:web:5c5caac0646620b976e5a4",
  measurementId: "G-XG2EJ4ZLJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;