import React, { useState, useEffect } from "react";
import Hamburger from "../Hamburger";
import "./styles.scss";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const scroll = () => {
    document.body.style.overflow = "show";
    return () => (document.body.style.overflow = "unset");
  };

  const cls = isOpen ? "top-nav" : "top-nav open";

  const scrollToElement = element => {
    console.log("scrollToElement");

    scroll();
    setIsOpen(!isOpen);
    scroller.scrollTo(element, {
      duration: 1500,
      smooth: true,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <div className="header">
      <Hamburger toggle={toggle} isOpen={isOpen} />
      <nav className={cls}>
        <ul className="nav-list">
          <li>
            <Link
              activeClass="active"
              className="nav-link"
              onClick={() => scrollToElement("top-nav open")}
              to="about"
              spy={true}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="nav-link"
              onClick={() => scrollToElement("about")}
              to="about"
              spy={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              onClick={() => scrollToElement("services")}
              to="services"
              spy={true}
              smooth={true}
              duration={1500}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              className="nav-link"
              onClick={() => scrollToElement("portfolio")}
              to="portfolio"
              duration={1500}
              smooth={true}
              offset={45}
            >
              Portfolio
            </Link>
          </li>
          <li
            className="nav-link"
            onClick={() => scrollToElement("experience")}
          >
            Experience
          </li>
          <li className="nav-link" onClick={() => scrollToElement("contact")}>
            Contact
          </li>
        </ul>
      </nav>
      <div className="landing-text">
        <h1>Yaniv Zoie</h1>
        <h6>Web Developer</h6>
      </div>
    </div>
  );
};

export default Navbar;
