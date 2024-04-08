// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b80f2.firebaseapp.com",
  projectId: "mern-auth-b80f2",
  storageBucket: "mern-auth-b80f2.appspot.com",
  messagingSenderId: "626621634458",
  appId: "1:626621634458:web:4755463a7438557cbf0c23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);