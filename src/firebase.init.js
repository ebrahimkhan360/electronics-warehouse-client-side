// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKtwRim5oI5mnIhGLphhY7xxWLo4oO3nc",
  authDomain: "electronics-warehouse-6f510.firebaseapp.com",
  projectId: "electronics-warehouse-6f510",
  storageBucket: "electronics-warehouse-6f510.appspot.com",
  messagingSenderId: "3076165418",
  appId: "1:3076165418:web:d57b26262334b686acd853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;