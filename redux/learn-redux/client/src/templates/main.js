function MainTemplate({ left, rightup, rightdown }) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <div>{left}</div>
        </div>
        <div className='col'>
          <div className='row mb-5'>{rightup}</div>
          <div className='row'>{rightdown}</div>
        </div>
      </div>
    </div>
  );
}

export default MainTemplate;
