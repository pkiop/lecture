import attendanceAction from '../actions';
const {
  SET_ATTENDANCE,
  SET_ATTENDANCE_SUCCESS,
  SET_ATTENDANCE_ERROR,
  GET_ATTENDANCES,
  GET_ATTENDANCES_SUCCESS,
  GET_ATTENDANCES_ERROR,
} = attendanceAction.attendance;

export const initialState = {
  loading: false,
  data: null,
  error: null,
  setLoading: false,
  setError: null,
};

const attendance = (state = initialState, action) => {
  switch (action.type) {
    case SET_ATTENDANCE:
      return {
        ...state,
        setLoading: true,
        setError: null,
      };
    case SET_ATTENDANCE_SUCCESS:
      return {
        ...state,
        setLoading: false,
        setError: null,
      };
    case SET_ATTENDANCE_ERROR:
      return {
        ...state,
        setLoading: false,
        setError: action.error,
      };
    case GET_ATTENDANCES:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case GET_ATTENDANCES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.attendances,
        error: null,
      };
    case GET_ATTENDANCES_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default attendance;
