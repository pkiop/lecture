import AttendanceRate from '../../components/AttendanceRate';
import { useSelector } from 'react-redux';

function AttendanceRateContainer() {
  const studentInfoList = useSelector((state) => state.attendance);
  const attendanceCount = studentInfoList.filter(
    (studentInfo) => studentInfo.isAttendance
  ).length;
  const rate = (attendanceCount / studentInfoList.length) * 100;
  return <AttendanceRate rate={rate} />;
}

export default AttendanceRateContainer;
