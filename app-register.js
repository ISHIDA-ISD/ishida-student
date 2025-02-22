// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
