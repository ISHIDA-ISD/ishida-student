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
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      firebase.auth().signInWithEmailAndPassword(username + '@example.com', password)
        .then((userCredential) => {
          alert('Logged in successfully');
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          console.error('Error logging in:', error);
        });
    } else {
      alert('Please provide both username and password');
    }
  });
  