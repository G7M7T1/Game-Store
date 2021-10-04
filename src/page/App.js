import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import WelcomeText from "../components/WelcomeText";

function App() {
  return (
    <div className="main">
      <Header userName="Creagan" />
      <WelcomeText userName="Creagan" />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
