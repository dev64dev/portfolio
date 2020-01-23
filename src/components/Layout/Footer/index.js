import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./styles.scss";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div>
      <footer className="copyright">
        <div className="up" id="up" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
        </div>
        <p>&copy; 2019 Yaniv Zoie</p>
      </footer>
    </div>
  );
};

export default Footer;
