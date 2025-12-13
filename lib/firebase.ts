// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0l799qTSzHzzXkFgg25mWd1I9S8QKEdk",
  authDomain: "capitalcorefinance-ash.firebaseapp.com",
  projectId: "capitalcorefinance-ash",
  storageBucket: "capitalcorefinance-ash.firebasestorage.app",
  messagingSenderId: "261780451514",
  appId: "1:261780451514:web:e6347691ead9e04fb35283",
  measurementId: "G-GGEWLHFD6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);