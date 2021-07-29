const express = require('express');
const router = express.Router();

const { attendance } = require('../../services');

const {
  listAttendance,
  getAttendanceById,
  addAttendance,
  updateAttendance,
  deleteAttendance,
} = attendance;

router.get('/', async (req, res) => {
  const attendances = await listAttendance();
  res.send(attendances);
});

router.get('/:id', async (req, res) => {
  const attendance = await getAttendanceById(Number(req.params.id));
  res.send(attendance);
});

router.post('/', async (req, res) => {
  await addAttendance({
    name: req.body.name,
    studentId: req.body.studentId,
    isAttendance: req.body.isAttendance,
  });
  res.send('입력 완료');
});

router.put('/', async (req, res) => {
  await updateAttendance({
    name: req.body.name,
    studentId: req.body.studentId,
    isAttendance: req.body.isAttendance,
  });
  res.send('수정 완료');
});

router.delete('/:id', async (req, res) => {
  await deleteAttendance({ attendanceId: req.params.id });
  res.send('삭제 완료');
});

module.exports = router;
