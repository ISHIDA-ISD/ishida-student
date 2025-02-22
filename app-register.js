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
        window.location.href = './dashbord.html';
      }).catch((error) => {
        console.error('Error logging in:', error);
      
        console.error('Error registering user:', error);
      
    } else {
      alert('Please provide both username and password');
    }
  });
  