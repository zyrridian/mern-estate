// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b70f.firebaseapp.com",
  projectId: "mern-estate-5b70f",
  storageBucket: "mern-estate-5b70f.appspot.com",
  messagingSenderId: "630628475728",
  appId: "1:630628475728:web:0ffb085c68863c0d1a8255"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);