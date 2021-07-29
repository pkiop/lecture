const { Schema, model } = require('mongoose');

const AttendanceSchema = new Schema({
  studentId: {
    type: Number,
  },
  name: {
    type: String,
  },
  isAttendance: {
    type: Boolean,
  },
});

module.exports = model('attendance', AttendanceSchema);
