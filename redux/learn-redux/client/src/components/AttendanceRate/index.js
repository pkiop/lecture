function AttendanceRate({ rate }) {
  return (
    <div className='container border border-primary p-3'>
      <div className='text-center fs-3 mb-4'>출석률</div>
      <div className='text-center fs-2'>{rate} %</div>
    </div>
  );
}

export default AttendanceRate;
