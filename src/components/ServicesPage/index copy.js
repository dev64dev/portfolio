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
                <h1>
                  <i className="fas fa-layer-group"></i> Web Developer
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="skills">
              <div className="icon-container">
                <h1>
                  <i className="fas fa-laptop-code"></i> Front-End Developer
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="skills">
              <div className="icon-container">
                <h1>
                  <i className="fas fa-chart-bar"></i> Qa Automation
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
