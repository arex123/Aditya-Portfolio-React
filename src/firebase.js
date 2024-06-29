// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzkW8bl5qsIoeBTuUMQl-vjPOPJywUJo",
  authDomain: "portfolio-stats.firebaseapp.com",
  projectId: "portfolio-stats",
  storageBucket: "portfolio-stats.appspot.com",
  messagingSenderId: "800221796464",
  appId: "1:800221796464:web:f7a8f04274b1e7f6197cb5",
  measurementId: "G-K5G7ZGGK6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

const analytics = getAnalytics(app);