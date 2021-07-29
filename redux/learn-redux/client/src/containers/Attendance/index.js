import { useSelector } from 'react-redux';
import Attendance from '../../components/Attendance';

function AttendanceContainer() {
  const studentInfoList = useSelector((state) => state.attendance);
  return <Attendance studentInfoList={studentInfoList} />;
}

export default AttendanceContainer;
