import React from "react";
import "./styles.scss";

const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="container">
          <div className="section-heading">
            <h1>Services</h1>
            <h6>What I can do for you?</h6>
          </div>
          <div className="my-skills">
            <div className="skills">
              <div className="icon-container">
                <i className="fas fa-layer-group"></i>
              </div>
              <h1>Web Developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="skills">
              <div className="icon-container">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h1>Front-End</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="skills">
              <div className="icon-container">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h1>Qa Automation</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
