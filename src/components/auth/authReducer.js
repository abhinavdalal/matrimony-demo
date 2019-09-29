import {
  LOGIN_TRY,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from './authActions';

const defaultState = {
  isAuthenticated: false,
  authError: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_TRY:
      return defaultState;
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        authError: null
      }
    case LOGIN_ERROR:
      return {
        isAuthenticated: false,
        authError: action.payload.error
      }
    case LOGOUT:
      return defaultState;
    case '@@redux-form/CHANGE':
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
}