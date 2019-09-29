import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import { loginSuccess, loginError } from '../../components/auth/authActions';

const LoginScreen = (props) => {
  const {
    isAuthenticated,
    authError,
    dispatchLoginSuccess,
    dispatchLoginError
  } = props;
  let history = useHistory();

  const simulateLogin = (values) => {
    const {username, password} = values;

    // should call api via saga here but only front end demo for now
    if (username==='shaadi' && password==='123') {
      dispatchLoginSuccess();
      history.push('/carousel');
    } else {
      dispatchLoginError({error: 'invalid credentials'})
    }
  };

  return isAuthenticated ? <Redirect to="/carousel" /> 
    : <LoginForm authError={authError} onSubmit={simulateLogin}/>;
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  authError: state.auth.authError
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginSuccess: (payload) => dispatch(loginSuccess(payload)),
  dispatchLoginError: (payload) => dispatch(loginError(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);