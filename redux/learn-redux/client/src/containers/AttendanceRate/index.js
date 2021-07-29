import AttendanceRate from '../../components/AttendanceRate';
import { useSelector } from 'react-redux';

function AttendanceRateContainer() {
  const {
    data: studentInfoList,
    loading,
    error,
  } = useSelector((state) => state.attendance);
  if (!studentInfoList) {
    return <></>;
  }

  if (loading) {
    return <>로딩중</>;
  }
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  const attendanceCount = studentInfoList.filter(
    (studentInfo) => studentInfo.isAttendance
  ).length;
  const rate = (attendanceCount / studentInfoList.length) * 100;
  return <AttendanceRate rate={rate} />;
}

export default AttendanceRateContainer;
