import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJJz3e8v4C5hpLlUOm1wltPSMCRrIrxnw",
  authDomain: "fir-sbs-9bf2a.firebaseapp.com",
  projectId: "fir-sbs-9bf2a",
  storageBucket: "fir-sbs-9bf2a.firebasestorage.app",
  messagingSenderId: "244332332649",
  appId: "1:244332332649:web:a6703bf928a8a7be4904f8",
  measurementId: "G-M2ZZ864YV4",
  databaseURL:"https://fir-sbs-9bf2a-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
