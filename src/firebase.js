// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhSyHuiqduowmGTVT7Oyj36jpfUNPbDxA",
  authDomain: "guardian-certification-6fcc3.firebaseapp.com",
  databaseURL: "https://guardian-certification-6fcc3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "guardian-certification-6fcc3",
  storageBucket: "guardian-certification-6fcc3.firebasestorage.app",
  messagingSenderId: "104669082579",
  appId: "1:104669082579:web:6f0d503ef3ea38fb233526",
  measurementId: "G-RJJXV5K8GT"
};

const app = initializeApp(firebaseConfig);

// ✅ Auth & DB
export const auth = getAuth(app);
export const database = getDatabase(app);

// ✅ Sign in anonymously at startup (so `.read` rules work)
signInAnonymously(auth).catch((error) => {
  console.error("Anonymous sign-in failed:", error.code, error.message);
});
