// src/videoUpload.js
import { auth, db } from './app.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("upload-form");
  const statusDiv = document.getElementById("upload-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("ログインしてください");
      location.href = "login.html";
      return;
    }

    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const tags = form.tags.value.split(",").map(t => t.trim());
    const category = form.category.value;
    const videoFile = form.video.files[0];
    const thumbnailFile = form.thumbnail.files[0];

    if (!videoFile) {
      alert("動画ファイルを選択してください");
      return;
    }

    // TODO: CloudinaryアップロードAPIをGAS経由などで呼び出す実装

    statusDiv.textContent = "アップロード中…";

    // サンプル: Firestoreに動画メタデータ登録のみ
    try {
      await addDoc(collection(db, "videos"), {
        userId: auth.currentUser.uid,
        title,
        description,
        tags,
        category,
        uploadTime: serverTimestamp(),
        // videoUrl: "CloudinaryのURL", thumbnailUrl: "CloudinaryのURL",
        views: 0,
        likes: 0,
      });
      statusDiv.textContent = "アップロード成功";
      form.reset();
    } catch (e) {
      statusDiv.textContent = "アップロード失敗: " + e.message;
    }
  });
});
