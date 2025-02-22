import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyAkLZyn-lNSRhgriZrMCgf7AXgaNA3nXZM",
  authDomain: "ishida-school-9cf4d.firebaseapp.com",
  projectId: "ishida-school-9cf4d",
  storageBucket: "ishida-school-9cf4d.firebasestorage.app",
  messagingSenderId: "909704780699",
  appId: "1:909704780699:web:a92ec65bb54074899e1f3e"
  measurementId: "G-59HJ449QTW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Firebaseの初期化
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  // ユーザー登録機能
  document.getElementById('registerBtn').addEventListener('click', () => {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    // 新しいユーザーの登録（簡易的な例）
    // 実際にはユーザーネームとパスワードをサーバー側で保存し、カスタムトークンを発行する必要があります
    if (newUsername && newPassword) {
      // ここでは簡単な方法として匿名認証を使用
      auth.signInAnonymously().then(() => {
        alert('User registered successfully');
        window.location.href = 'login.html';
      }).catch((error) => {
        console.error('Error logging in:', error);
      
        console.error('Error registering user:', error);
      })
      
    } else {
      alert('Please provide both username and password');
    }
  });
  