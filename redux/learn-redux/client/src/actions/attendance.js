import api from '../api/attendance';
// action type
export const SET_ATTENDANCE = 'SET_ATTENDANCE';
export const GET_ATTENDANCES = 'GET_ATTENDANCES';
export const GET_ATTENDANCES_SUCCESS = 'GET_ATTENDANCES_SUCCESS';
export const GET_ATTENDANCES_ERROR = 'GET_ATTENDANCES_ERROR';
export const SET_ATTENDANCE_SUCCESS = 'SET_ATTENDANCE_SUCCESS';
export const SET_ATTENDANCE_ERROR = 'SET_ATTENDANCE_ERROR';

export const setAttendance =
  (studentNumber, isAttendance) => async (dispatch) => {
    dispatch({ type: SET_ATTENDANCE });
    try {
      await api.setAttendance(studentNumber, isAttendance);
      dispatch({ type: SET_ATTENDANCE_SUCCESS });
      dispatch(getAttendances());
    } catch (error) {
      dispatch({ type: SET_ATTENDANCE_ERROR, error });
    }
  };

export const getAttendances = () => async (dispatch) => {
  dispatch({ type: GET_ATTENDANCES });
  try {
    const attendances = await api.getAttendances();
    console.log('set attendances : ', attendances);
    dispatch({ type: GET_ATTENDANCES_SUCCESS, attendances: attendances.data });
  } catch (err) {
    dispatch({ type: GET_ATTENDANCES_ERROR, error: err });
  }
};
