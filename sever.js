const admin = require('firebase-admin');
const express = require('express');

// Firebase Admin SDKの初期化
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ishida-school-9cf4d.firebaseio.com"
});

// カスタムトークンの生成
const generateCustomToken = async (username) => {
  try {
    const customToken = await admin.auth().createCustomToken(username);
    return customToken;
  } catch (error) {
    console.error('Error creating custom token:', error);
    throw error;
  }
};

// エクスプレスサーバーの設定
const app = express();
app.use(express.json());

app.post('/api/authenticate', async (req, res) => {
  const { username, password } = req.body;

  // 簡易的なユーザーネームとパスワードの検証
  if (username === 'testuser' && password === 'testpass') {
    try {
      const customToken = await generateCustomToken(username);
      res.json({ customToken });
    } catch (error) {
      res.status(500).send('Error creating custom token');
    }
  } else {
    res.status(401).send('Invalid username or password');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
