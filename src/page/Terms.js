import React from "react";
import Header from "../components/Header";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/Footer";
import TermsList from "../components/TermsList";

function Terms() {
  return (
    <div className="Terms">
      <Header userName="" />
      <WelcomeText userName="" />
      <TermsList />
      <Footer />
    </div>
  );
}

export default Terms;
