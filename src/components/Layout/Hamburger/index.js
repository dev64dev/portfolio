import React, { useState, Fragment } from "react";
import useToggle from "../../../hooks/useToggle";
import "./styles.scss";

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <Fragment>
      {!isOpen ? (
        <div className="menu-toggler open" onClick={toggle}>
          <div className="open bar half start"></div>
          <div className="bar"></div>
          <div className="open bar half end"></div>
        </div>
      ) : (
        <div className="menu-toggler" onClick={toggle}>
          <div className="bar half start"></div>
          <div className="bar start"></div>
          <div className="bar half end"></div>
        </div>
      )}
    </Fragment>
  );
};

export default Hamburger;
