const AttendanceModel = require('../../models/attendance');

const listAttendance = async () => {
  try {
    const attendances = await AttendanceModel.find({}).exec();
    return attendances;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const getAttendanceById = async (attendanceId) => {
  try {
    const attendance = await AttendanceModel.findOne({
      id: attendanceId,
    }).exec();
    return attendance;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const addAttendance = async ({ name, studentId, isAttendance }) => {
  try {
    await AttendanceModel.create({
      name,
      studentId,
      isAttendance,
    });
  } catch (err) {
    console.error(err);
    return {};
  }
};

const updateAttendance = async ({ name, studentId, isAttendance }) => {
  try {
    const query = { studentId };
    await AttendanceModel.updateOne(query, {
      name,
      studentId,
      isAttendance,
    }).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

const deleteAttendance = async ({ attendanceId }) => {
  try {
    const query = { _id: attendanceId };
    await AttendanceModel.deleteOne(query).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

module.exports = {
  listAttendance,
  getAttendanceById,
  addAttendance,
  updateAttendance,
  deleteAttendance,
};
