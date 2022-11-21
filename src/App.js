import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytic from "./components/Analytic";
import Newletters from "./components/Newletters";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytic />
      <Newletters />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
