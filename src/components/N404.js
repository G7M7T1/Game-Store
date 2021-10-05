import React from "react";
import "../style/notfound.css";
import { Link } from "react-router-dom";

function N404() {
  return (
    <div className="N404Page">
      <h1 className="awesome">404</h1>
      <p>Page Not Found</p>
      <p>
        <Link to="/">Click Here Back To HomePage</Link>
      </p>
    </div>
  );
}

export default N404;
