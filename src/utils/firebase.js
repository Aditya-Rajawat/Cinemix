// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0CfEpE1wKbbOdSk7wQ9E_9MsZMhZxWU0",
  authDomain: "netflixgpt-e8317.firebaseapp.com",
  projectId: "netflixgpt-e8317",
  storageBucket: "netflixgpt-e8317.appspot.com",
  messagingSenderId: "1079918684766",
  appId: "1:1079918684766:web:f66e9ab266144da262e2cf",
  measurementId: "G-QN70VP977D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
