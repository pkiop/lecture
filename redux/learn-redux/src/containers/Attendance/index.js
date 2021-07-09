import Attendance from '../../components/Attendance';

const test = [
  {
    id: 'aaa',
    name: '김모모',
    number: 20181111,
    isAttendance: true,
  },
  {
    id: 'bbb',
    name: '최모모',
    number: 20182222,
    isAttendance: false,
  },
  {
    id: 'ccc',
    name: '남모모',
    number: 20183333,
    isAttendance: false,
  },
  {
    id: 'ddd',
    name: '강모모',
    number: 20184444,
    isAttendance: true,
  },
];

function AttendanceContainer() {
  return <Attendance studentInfoList={test} />;
}

export default AttendanceContainer;
