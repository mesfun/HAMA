// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "hama-b737f.firebaseapp.com",
  projectId: "hama-b737f",
  storageBucket: "hama-b737f.firebasestorage.app",
  messagingSenderId: "817602598403",
  appId: "1:817602598403:web:dc1af6425d341bbab62036"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);