export const LOGIN_TRY = 'LOGIN_TRY';
export const loginTry = (payload) => ({
  type: LOGIN_TRY,
  payload
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload
});

export const LOGOUT = 'LOGOUT';
export const logout = (payload) => ({
  type: LOGOUT,
  payload
});
