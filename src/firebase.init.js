// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK3YBPjGzNWSbLNMdScYt1WqVfBCgtqxQ",
  authDomain: "ema-john-simple-fc541.firebaseapp.com",
  projectId: "ema-john-simple-fc541",
  storageBucket: "ema-john-simple-fc541.appspot.com",
  messagingSenderId: "286969902732",
  appId: "1:286969902732:web:3b9ca3aff4927645fd6da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;