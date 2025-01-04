
// /lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2g6GpQKL0U3p1jCyNdFIn00GqKy0uPOA",
    authDomain: "storm-d48f0.firebaseapp.com",
    projectId: "storm-d48f0",
    storageBucket: "storm-d48f0.firebasestorage.app",
    messagingSenderId: "910763903047",
    appId: "1:910763903047:web:dc27cf07c831f1714b4962",
    measurementId: "G-E1C3P7ZKB2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };