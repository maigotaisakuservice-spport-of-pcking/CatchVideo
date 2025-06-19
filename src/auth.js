// src/auth.js
import { auth } from './app.js';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

export async function loginWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("ログイン成功");
    location.href = "index.html";
  } catch (error) {
    alert("ログインエラー: " + error.message);
  }
}

export async function loginWithGoogle() {
  try {
    await signInWithPopup(auth, provider);
    alert("Googleログイン成功");
    location.href = "index.html";
  } catch (error) {
    alert("Googleログインエラー: " + error.message);
  }
}

export async function logout() {
  await signOut(auth);
  alert("ログアウトしました");
  location.href = "login.html";
}
