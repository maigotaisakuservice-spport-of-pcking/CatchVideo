// src/liveStream.js
// TURNサーバーの設定例を含むP2P WebRTC接続の骨組み
const config = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { 
      urls: "turn:turn.example.com:3478",
      username: "user",
      credential: "pass"
    }
  ]
};

// ここにシグナリングや接続処理を実装

// 5秒間隔で再接続試行なども実装可能
