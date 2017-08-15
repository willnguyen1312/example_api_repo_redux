import React, { Component, PropTypes } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { loginUser, logoutUser } from "../actions";

export default class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Quotes App
          </a>
          <div className="navbar-form">
            {isAuthenticated
              ? <Logout onLogoutClick={() => dispatch(logoutUser())} />
              : <Login
                  errorMessage={errorMessage}
                  onLoginClick={creds => dispatch(loginUser(creds))}
                />}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};
