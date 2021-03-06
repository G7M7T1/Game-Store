import React from "react";
import "../style/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-wrapper">
      <form className="box login-box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-fullwidth is-primary">Login</button>
          <Link to="/">
            <button className="button is-fullwidth is-primary">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
