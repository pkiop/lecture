import attendanceAction from '../actions';
const { SET_ATTENDANCE } = attendanceAction.attendance;

const attendance = (state = [], action) => {
  console.log('SET_ATTen : ', SET_ATTENDANCE);
  console.log('action : ', action);
  switch (action.type) {
    case SET_ATTENDANCE:
      const newState = state.map((item) => {
        if (item.number === action.studentNumber) {
          return {
            ...item,
            isAttendance: action.isAttendance,
          };
        }
        return item;
      });

      console.log('newState : ', newState);
      return newState;
    default:
      return state;
  }
};

export default attendance;
