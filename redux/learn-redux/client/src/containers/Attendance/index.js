import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAttendances } from '../../actions/attendance';
import api from '../../api/attendance';
import Attendance from '../../components/Attendance';

function AttendanceContainer() {
  const { data, loading, error } = useSelector((state) => state.attendance);
  // test
  // api.setStudent();
  //
  const studentInfoList = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAttendances());
  }, []);
  if (!studentInfoList) {
    return <></>;
  }
  if (loading) {
    return <>로딩중</>;
  }
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return <Attendance studentInfoList={studentInfoList} />;
}

export default AttendanceContainer;
