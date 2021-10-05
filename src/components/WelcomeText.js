import React from "react";
import "../style/welcometext.css";
import { Link } from "react-router-dom";

function WelcomeText({ userName }) {
  return (
    <div className="welcomeText">
      <h1> WELCOME BACK {userName.toUpperCase()}!</h1>
      <p>
        GLAD YOU FOUND YOUR WAY BACK TO GAME STORE! HERE ARE SOME USEFUL LINKS
        FOR YOU!
      </p>
      <div className="welcomeBtnList">
        <button className="button is-black">BUY GAME</button>
        <Link to="/terms">
          <button className="button is-black">TERMS</button>
        </Link>
        <button className="button is-black">STATUS</button>
      </div>
    </div>
  );
}

export default WelcomeText;
