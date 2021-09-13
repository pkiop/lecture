const jwt = require('jsonwebtoken');

const accessTokenVerify = (req, res, next) => {
  console.log('req - cookies ', req.cookies);
  const token = req.cookies.access_token;
  console.log('token : ', token);
  var decoded = jwt.verify(token, 'shhhhh');
  console.log(decoded.username); // bar
  req.user = {
    username: decoded.username,
    age: decoded.age,
    birthday: decoded.birthday,
  };
  next();
};

module.exports = { accessTokenVerify };
