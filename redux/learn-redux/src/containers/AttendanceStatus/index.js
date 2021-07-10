import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setAttendance } from '../../actions/attendance';
import AttendanceStatus from '../../components/AttendanceStatus';

function AttendanceStatusContainer() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const onClick = () => {
    const typedStudentNumber = inputRef.current.value;
    dispatch(setAttendance(Number(typedStudentNumber), true));
  };
  return <AttendanceStatus inputRef={inputRef} onClick={onClick} />;
}

export default AttendanceStatusContainer;
