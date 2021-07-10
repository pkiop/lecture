// action type
const SET_ATTENDANCE = 'SET_ATTENDANCE';

function setAttendance(studentNumber, isAttendance) {
  return { type: SET_ATTENDANCE, studentNumber, isAttendance };
}

export { SET_ATTENDANCE, setAttendance };
