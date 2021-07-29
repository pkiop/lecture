function Ball({ isGreen }) {
  const style = {
    backgroundColor: isGreen ? 'green' : 'red',
    width: '16px',
    height: '16px',
    borderRadius: '8px',
  };
  return <div style={style}></div>;
}

function Attendance({ studentInfoList }) {
  const StudentInfoList = studentInfoList.map((studentInfo) => {
    const { id, name, number, isAttendance } = studentInfo;
    return (
      <li className='list-group-item d-flex justify-content-between' key={id}>
        <div>{name}</div>
        <div>{number}</div>
        <Ball isGreen={isAttendance} />
      </li>
    );
  });
  return (
    <div className='container border border-primary p-3'>
      <div className='text-center fs-3 mb-4'>출석현황</div>
      <ul className='list-group'>{StudentInfoList}</ul>
    </div>
  );
}

export default Attendance;
