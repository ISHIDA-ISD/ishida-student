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
  
  document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // ユーザー認証（簡易的な例）
    if (username === 'testuser' && password === 'testpass') {
      auth.signInAnonymously().then(() => {
        alert('Logged in successfully');
      }).catch((error) => {
        console.error('Error logging in:', error);
        window.location.href = 'dashboard.html';
    }).catch((error) => {
      console.error('Error logging in:', error);
    
      });
    } else {
      alert('Invalid username or password');
    }
  });
  