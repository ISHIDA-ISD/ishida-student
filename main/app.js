// Firebaseの設定を追加
const firebaseConfig = {
    apiKey: "AIzaSyA9DLt8abEiur3ALzONh8voVYb8l-YpK2w",
    authDomain: "ishida-73aa3.firebaseapp.com",
    projectId: "ishida-73aa3",
    storageBucket: "ishida-73aa3.appspot.com",
    messagingSenderId: "404086879771",
    appId: "1:404086879771:web:d50dc09c3f48c74fab6abe",
    measurementId: "G-QYF6ETTFCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 匿名ログイン機能
function loginAnonymously() {
    signInAnonymously(auth)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('ログイン成功');
            window.location.href = 'https://ishida-isd.github.io/student/dashboard.html'; // ログイン成功後にdashboard.htmlにリダイレクト
        })
        .catch((error) => {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = error.message;
        });
}

// ユーザー登録機能
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username && password) {
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('登録完了');
                window.location.href = 'https://ishida-isd.github.io/student/dashboard.html'; // 登録完了後にdashboard.htmlにリダイレクト
            })
            .catch((error) => {
                errorMessage.textContent = error.message;
            });
    } else {
        errorMessage.textContent = 'ユーザー名とパスワードを入力してください。';
    }
}