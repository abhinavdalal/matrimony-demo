import React from 'react';
import { useHistory } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';

export default () => {
  let history = useHistory();

  const simulateLogin = (values) => {
    const {username, password} = values;
    if (username==='shaadi' && password==='123') {
      history.push('/test');
    }
  };

  return <LoginForm onSubmit={simulateLogin}/>;
}