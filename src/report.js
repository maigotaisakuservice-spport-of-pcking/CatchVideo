// src/report.js
import { auth, db } from './app.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

document.getElementById("report-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!auth.currentUser) {
    alert("ログインしてください");
    location.href = "login.html";
    return;
  }

  const targetId = e.target.target-id.value.trim();
  const content = e.target.content.value.trim();

  if (!targetId || !content) {
    alert("すべての項目を入力してください");
    return;
  }

  try {
    await addDoc(collection(db, "reports"), {
      reporterId: auth.currentUser.uid,
      targetId,
      content,
      reportTime: serverTimestamp()
    });
    alert("報告を受け付けました");
    e.target.reset();
  } catch (error) {
    alert("エラーが発生しました: " + error.message);
  }
});
