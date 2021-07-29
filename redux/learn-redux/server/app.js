const express = require('express');
const app = express();
const port = 4000;
const router = require('./routers');
const cors = require('cors');

app.use(cors());
const { connect: dbConnect } = require('./models');
dbConnect();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send('test');
});
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
