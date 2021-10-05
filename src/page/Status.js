import React from "react";
import Header from "../components/Header";
import WelcomeText from "../components/WelcomeText";
import StatusList from "../components/StatusList";
import Footer from "../components/Footer";

function Status() {
  return (
    <div className="Status">
      <Header userName="" />
      <WelcomeText userName="" />
      <StatusList />
      <Footer />
    </div>
  );
}

export default Status;
