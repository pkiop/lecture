import attendanceAction from '../actions';
const { SET_ATTENDANCE } = attendanceAction.attendance;

const attendance = (state = [], action) => {
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
      return newState;
    default:
      return state;
  }
};

export default attendance;
