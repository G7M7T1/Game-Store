import React from "react";
import "../style/welcometext.css";

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
        <button className="button is-black">FAQ</button>
        <button className="button is-black">Status</button>
      </div>
    </div>
  );
}

export default WelcomeText;
