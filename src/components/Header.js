import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";

function Header({ userName }) {
  function checkUser() {
    if (userName) {
      return (
        <React.Fragment>
          <a href="/" className="nickname">
            <i className="far fa-user"> </i>
            {userName}
          </a>
          <a href="/">
            <i className="fas fa-sign-out-alt"> </i> Logout
          </a>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </React.Fragment>
      );
    }
  }
  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          <a href="/">TrapWare</a>
          <a href="/">
            <i className="fas fa-home"> </i> Home
          </a>
          <a href="/">
            <i className="fas fa-store"> </i> Shop
          </a>
        </div>
        <div className="end">{checkUser()}</div>
      </div>
    </div>
  );
}

export default Header;
