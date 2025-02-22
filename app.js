// Firebaseの設定
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
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
  