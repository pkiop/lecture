const express = require('express');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const { accessTokenVerify } = require('./middleware');
const cookieParser = require('cookie-parser');
const app = express();

const database = [{ id: 1, username: 'abc', password: 'abc' }];

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/test', accessTokenVerify, (req, res) => {
  console.log('req user : ', req.user);
  res.send('test');
});

app.get('/users', (req, res) => {
  res.send(database);
});

app.post('/signup', async (req, res) => {
  const { username, password, age, birthday } = req.body;
  const hash = await argon2.hash(password);
  database.push({
    username,
    password: hash,
    age,
    birthday,
  });
  res.send('success');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = database.filter((user) => {
    return user.username === username;
  });
  if (user.length === 0) {
    res.status(403).send('해당하는 id가 없습니다.');
    return;
  }
  if (!(await argon2.verify(user[0].password, password))) {
    res.status(403).send('패스워드가 틀립니다.');
    return;
  }

  var token = jwt.sign(
    {
      username: user[0].username,
      age: user[0].age,
      birthday: user[0].birthday,
    },
    'shhhhh',
    { expiresIn: '1h' }
  );
  res.cookie('access_token', token, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });
  res.send('로그인 성공!');
  // jwt.sign({ id: req.user.id }, secret, { expiresIn: '1h' }, (err, token) => {
  //   // TODO: token을 client에 넘겨주는 방법에 대해 생각한다.
  //   res.cookie('accessToken', token);
  //   res.redirect('/');
  // });
});

app.listen(3000, () => {
  console.log('server on!');
});
