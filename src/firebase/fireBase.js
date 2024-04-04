// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbU8oR6sPsVn_d2wo0YtQpmeYfk--b2y4",
  authDomain: "user-email-password-57005.firebaseapp.com",
  projectId: "user-email-password-57005",
  storageBucket: "user-email-password-57005.appspot.com",
  messagingSenderId: "1069792067831",
  appId: "1:1069792067831:web:de56fb6f24af5ebd9713f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;