// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyAkLZyn-lNSRhgriZrMCgf7AXgaNA3nXZM",
  authDomain: "ishida-school-9cf4d.firebaseapp.com",
  projectId: "ishida-school-9cf4d",
  storageBucket: "ishida-school-9cf4d.firebasestorage.app",
  messagingSenderId: "909704780699",
  appId: "1:909704780699:web:a92ec65bb54074899e1f3e",
};

// Firebaseの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

document.getElementById('registerBtn').addEventListener('click', () => {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (newUsername && newPassword) {
    auth.createUserWithEmailAndPassword(newUsername + '@example.com', newPassword)
      .then((userCredential) => {
        alert('User registered successfully');
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  } else {
    alert('Please provide both username and password');
  }
});
