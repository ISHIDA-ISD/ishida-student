import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';



// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseConfig = {
  apiKey: "AIzaSyAkLZyn-lNSRhgriZrMCgf7AXgaNA3nXZM",
  authDomain: "ishida-school-9cf4d.firebaseapp.com",
  projectId: "ishida-school-9cf4d",
  storageBucket: "ishida-school-9cf4d.firebasestorage.app",
  messagingSenderId: "909704780699",
  appId: "1:909704780699:web:a92ec65bb54074899e1f3e",
  measurementId: "G-59HJ449QTW"
};
document.getElementById('registerBtn').addEventListener('click', () => {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (newUsername && newPassword) {
    createUserWithEmailAndPassword(auth, newUsername + '@example.com', newPassword)
      .then((userCredential) => {
        alert('User registered successfully');
        window.location.href = 'login.html';
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  } else {
    alert('Please provide both username and password');
  }
});
