const express = require('express');
const router = express.Router();
const attendanceRouter = require('./attendance');

router.use('/attendance', attendanceRouter);

module.exports = router;
