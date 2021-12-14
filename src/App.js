import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { donuts, coffee } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Donuts &#127849;" data={donuts} />
      <Feature />
      <Products heading="Iced Beverages 🧋" data={coffee} />
      <Footer />
    </Router>
  );
}

export default App;
