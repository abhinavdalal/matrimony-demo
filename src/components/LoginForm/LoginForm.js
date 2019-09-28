import React from 'react';
import { Field, reduxForm } from 'redux-form';

import logo from './logo.svg';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <img src={logo} className="App-logo" alt="logo" />
    <div>
      <label>Username</label>
      <span>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="shaadi"
        />
      </span>
    </div>
    <div>
      <label>Password</label>
      <span>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="123"
        />
      </span>
    </div>
    <button type="submit" disabled={props.pristine || props.submitting}>
      Submit
    </button>
  </form>
);

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(LoginForm);
