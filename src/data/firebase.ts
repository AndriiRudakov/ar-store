import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABEOjef42rtTIbke3Qd7pak6dWaHykxHs",
  authDomain: "arstore-4785a.firebaseapp.com",
  projectId: "arstore-4785a",
  storageBucket: "arstore-4785a.firebasestorage.app",
  messagingSenderId: "1044400686921",
  appId: "1:1044400686921:web:3ad534a6f2f6ca1c6ffc98"
};

const app = initializeApp(firebaseConfig);
export default getFirestore();