function Attendance({ inputRef, onClick }) {
  return (
    <div className='container border border-primary p-3'>
      <div className='text-center fs-3 mb-4'>학번</div>
      <div className='d-flex justify-content-center'>
        <input ref={inputRef} />
        <button onClick={onClick} className='btn btn-outline-success'>
          제출
        </button>
      </div>
    </div>
  );
}

export default Attendance;
