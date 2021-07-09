import { useRef } from 'react';
import AttendanceStatus from '../../components/AttendanceStatus';

function AttendanceStatusContainer() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log('value : ', inputRef.current.value);
  };
  return <AttendanceStatus inputRef={inputRef} onClick={onClick} />;
}

export default AttendanceStatusContainer;
