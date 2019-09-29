import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../Button/Button';
import logo from './logo.svg';
import './LoginForm.css';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <img src={logo} className="App-logo" alt="logo" />
    <div className="LoginForm_InputGroup">
      <label className="LoginForm_Label">Username</label>
      <span>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="shaadi"
        />
      </span>
    </div>
    <div className="LoginForm_InputGroup">
      <label className="LoginForm_Label">Password</label>
      <span>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="123"
        />
      </span>
    </div>
    <Button type="submit" disabled={props.pristine || props.submitting || props.invalid}>
      Submit
    </Button>
    { props.authError ? <p className="LoginForm_Error">{ props.authError }</p> : null }
  </form>
);

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm);
