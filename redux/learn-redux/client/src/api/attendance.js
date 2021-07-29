import axios from 'axios';

const getAttendances = async () => {
  return axios.get('http://localhost:4000/api/attendance');
};

const setAttendance = async (studentNumber, isAttendance) => {
  return axios.put('http://localhost:4000/api/attendance', {
    studentId: studentNumber,
    isAttendance,
  });
};

const setStudent = async () => {
  axios.post('http://localhost:4000/api/attendance', {
    name: '김모모',
    studentId: 20121111,
    isAttendance: false,
  });
  axios.post('http://localhost:4000/api/attendance', {
    name: '나모모',
    studentId: 20122222,
    isAttendance: false,
  });
  axios.post('http://localhost:4000/api/attendance', {
    name: '박모모',
    studentId: 20123333,
    isAttendance: false,
  });
  axios.post('http://localhost:4000/api/attendance', {
    name: '이모모',
    studentId: 20124444,
    isAttendance: false,
  });
};

export default { getAttendances, setAttendance, setStudent };
