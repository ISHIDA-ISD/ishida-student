import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyAkLZyn-lNSRhgriZrMCgf7AXgaNA3nXZM",
  authDomain: "ishida-school-9cf4d.firebaseapp.com",
  projectId: "ishida-school-9cf4d",
  storageBucket: "ishida-school-9cf4d.firebasestorage.app",
  messagingSenderId: "909704780699",
  appId: "1:909704780699:web:a92ec65bb54074899e1f3e",
  measurementId: "G-59HJ449QTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('registerBtn').addEventListener('click', async () => {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (newUsername && newPassword) {
    try {
      // バックエンドAPIにリクエストを送り、カスタムトークンを取得します
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: newUsername, password: newPassword })
      });
      const data = await response.json();
      const customToken = data.customToken;

      // Firebaseにカスタムトークンでログインします
      await signInWithCustomToken(auth, customToken);
      alert('User registered and logged in successfully');
      window.location.href = 'dashboard.html';
    } catch (error) {
      console.error('Error registering user:', error);
    }
  } else {
    alert('Please provide both username and password');
  }
});
