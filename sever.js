// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let users = []; // 簡単なメモリ内データベース（実際にはデータベースを使用することを推奨）

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.send('登録完了');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('ログイン成功');
    } else {
        res.status(401).send('ユーザー名またはパスワードが間違っています');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});