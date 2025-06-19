// src/app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCionIdr-4M3ZITUlSx8I5i8vmae-c-ldM",
  authDomain: "catch--video.firebaseapp.com",
  projectId: "catch--video",
  storageBucket: "catch--video.firebasestorage.app",
  messagingSenderId: "252815636201",
  appId: "1:252815636201:web:d4da3b738a0e536211e278",
  measurementId: "G-C73B0V1RLN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
