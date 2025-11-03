import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsServices from "./pages/ProductsServices";
import Reviews from "./pages/Reviews";
import "./App.css";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import RateUs from "./pages/RateUs";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
        <ProductsServices />
        <Payment />
        <Gallery />
        <RateUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
