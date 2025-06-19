// src/premium.js
import { auth, db } from './app.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

async function checkPremium() {
  if (!auth.currentUser) {
    alert("ログインしてください");
    location.href = "login.html";
    return;
  }

  const docRef = doc(db, "premiumUsers", auth.currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
}

document.getElementById("purchase-btn")?.addEventListener("click", () => {
  // ダミーで購入ページへリダイレクト
  location.href = "purchase_dummy.html";
});

export { checkPremium };
