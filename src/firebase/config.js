// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsnOebvJQGIounY_jApnHrObUWIcpd8Mc",
  authDomain: "lacasadelmate-809aa.firebaseapp.com",
  projectId: "lacasadelmate-809aa",
  storageBucket: "lacasadelmate-809aa.appspot.com",
  messagingSenderId: "18247895661",
  appId: "1:18247895661:web:f37673ae1bca847f29cd64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);