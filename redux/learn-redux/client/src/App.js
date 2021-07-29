import AttendanceContainer from './containers/Attendance';
import AttendanceRateContainer from './containers/AttendanceRate';
import AttendanceStatusContainer from './containers/AttendanceStatus';
import MainTemplate from './templates/main';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './styles/reset.scss';
import './styles/global-style.scss';

function App() {
  return (
    <MainTemplate
      left={<AttendanceContainer />}
      rightup={<AttendanceRateContainer />}
      rightdown={<AttendanceStatusContainer />}
    />
  );
}

export default App;
