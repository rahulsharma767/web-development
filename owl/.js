// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfloCGr4MVJJ78ALSS8sCEtTi62xrpRgw",
  authDomain: "smart-lock-c33fb.firebaseapp.com",
  projectId: "smart-lock-c33fb",
  storageBucket: "smart-lock-c33fb.firebasestorage.app",
  messagingSenderId: "950818109893",
  appId: "1:950818109893:web:8a0da064ea4994671d33ac",
  measurementId: "G-CZ75B7RLDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
