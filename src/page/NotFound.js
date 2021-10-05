import React from "react";
import Header from "../components/Header";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/Footer";
import N404 from "../components/N404";

function NotFound() {
  return (
    <div className="notFoundPage">
      <Header userName="" />
      <WelcomeText userName="" />
      <N404 />
      <Footer />
    </div>
  );
}

export default NotFound;
