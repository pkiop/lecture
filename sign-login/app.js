const express = require('express');
const app = express();

const database = [{ id: 1, username: 'abc', password: 'abc' }];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/signup', function (req, res) {
  const title = req.body.title;
  database.push({
    id: database.length + 1,
    title,
  });
  res.send('값 추가가 정상적으로 완료되었습니다.');
});

app.listen(3000, () => {
  console.log('server on!');
});
