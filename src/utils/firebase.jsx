// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPTklbK3V8mQ_kwP2T2f6V0d6AJ7GFqys",
  authDomain: "netflixgpt-e123e.firebaseapp.com",
  projectId: "netflixgpt-e123e",
  storageBucket: "netflixgpt-e123e.firebasestorage.app",
  messagingSenderId: "523431185171",
  appId: "1:523431185171:web:f50612d7293804c94be8e6",
  measurementId: "G-KE7J7SB1MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);