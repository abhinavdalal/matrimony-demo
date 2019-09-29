import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import { logout } from '../auth/authActions';
import './Header.css';

const Header = (props) => {
  const { isAuthenticated, dispatchLogout } = props;
  const logoutClicked = () => {
    dispatchLogout();
  };
  
  return (
    <header className="Header">
      { isAuthenticated ? 
        <Button
          className="Header_Button"
          onClick={logoutClicked}
        >
          Logout
        </Button> 
        : null
      }
      <Link 
        className="Header_Heading"
        to="/"
      >
        <h3>Matrimony.com</h3>
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogout: (payload) => dispatch(logout(payload))
});

export default connect( mapStateToProps , mapDispatchToProps)(Header);
