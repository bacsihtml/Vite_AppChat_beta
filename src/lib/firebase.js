import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEYID,
  authDomain: "appchat-704db.firebaseapp.com",
  projectId: "appchat-704db",
  storageBucket: "appchat-704db.appspot.com",
  messagingSenderId: "815918753607",
  appId: "1:815918753607:web:7aad9d27978247890ece62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()