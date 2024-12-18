import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgpn7g_mGvP6hqiMS8dW_Mjv__e0yHqBE",
  authDomain: "chatapp-f66cc.firebaseapp.com",
  projectId: "chatapp-f66cc",
  storageBucket: "chatapp-f66cc.firebasestorage.app",
  messagingSenderId: "287267352727",
  appId: "1:287267352727:web:9a940c5140efc90f8039d2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
