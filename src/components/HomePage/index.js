import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import About from "../About";
import ServicesPage from "../ServicesPage";
import Experience from "../Experience";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import "./styles.scss";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <ServicesPage />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
