import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAa39EdyOqkz2W_dUBmEfH1YdoNF_YSnEM",
  authDomain: "reactchat-30aa3.firebaseapp.com",
  projectId: "reactchat-30aa3",
  storageBucket: "reactchat-30aa3.firebasestorage.app",
  messagingSenderId: "332343056848",
  appId: "1:332343056848:web:7efd3c40afb288ccda41d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore();
export const storage = getStorage();