// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwSXSejoYjfPtGCc6aK2mFCV_EXN778cw",
  authDomain: "food-meal-project.firebaseapp.com",
  projectId: "food-meal-project",
  storageBucket: "food-meal-project.appspot.com",
  messagingSenderId: "430611229777",
  appId: "1:430611229777:web:1bcb0933672c6a32801c70",
  measurementId: "G-XBRTQ0C8MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();