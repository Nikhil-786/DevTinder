// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApFl8k8CTc8qUmP6N02fr1Ho5Ny4Jh9QY",
  authDomain: "devtinder-c2558.firebaseapp.com",
  projectId: "devtinder-c2558",
  storageBucket: "devtinder-c2558.firebasestorage.app",
  messagingSenderId: "1086724487670",
  appId: "1:1086724487670:web:b63de8d0ec6e16f72f6fd7",
  measurementId: "G-WQHZCF4DK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const auth = getAuth();