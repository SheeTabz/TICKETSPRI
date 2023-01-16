// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD16NMaGQWLVgNhJqCz_2iu9MfvA1YLKVY",
  authDomain: "busimage-6e690.firebaseapp.com",
  projectId: "busimage-6e690",
  storageBucket: "busimage-6e690.appspot.com",
  messagingSenderId: "292112403413",
  appId: "1:292112403413:web:00afb8598131d3a3510b5c",
  measurementId: "G-CB6799WQ4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
