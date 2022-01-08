const express = require('express');
const app = express();
const mysql = require('mysql2/promise');

// create the connection to database
let connection;

// http://localhost:3000
// ejs pug

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/database', async function (req, res) {
  const [rows, fields] = await connection.execute(`SELECT * FROM user`);
  res.send(rows);
});

app.get('/database/:id', async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(
    `SELECT * FROM user WHERE id=?`,
    [id]
  );
  res.send(rows[0]);
});

app.post('/database', async function (req, res) {
  const { name, age } = req.body;
  const [rows, fields] = await connection.execute(
    `INSERT INTO user(name, age) VALUES(?, ?)`,
    [name, age]
  );
  res.send('값 추가가 정상적으로 완료되었습니다.');
});

app.put('/database', async function (req, res) {
  const { id, name, age } = req.body;
  const [rows, fields] = await connection.execute(
    `UPDATE user SET name=?, age=? WHERE id=?`,
    [name, age, id]
  );
  res.send('값 수정이 정상적으로 완료되었습니다.');
});

app.delete('/database/:id', async function (req, res) {
  const id = req.params.id;
  const [rows, fields] = await connection.execute(
    `DELETE FROM user WHERE id=?`,
    [id]
  );
  res.send('값 삭제가 정상적으로 완료되었습니다.');
});

app.listen(3000, async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'myapp',
    password: 'root',
  });
  console.log('server on!');
});
