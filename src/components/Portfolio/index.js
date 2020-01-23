import React from "react";
import portitem1 from "../../images/portitem1.jpeg";
import portitem2 from "../../images/portitem2.jpeg";
import "./styles.scss";

const Portfolio = () => {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-heading">
            <h1>Portfolio</h1>
            <h6>View some of my recent work</h6>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-img has-marign-right">
              <img src={portitem1} alt="port" />
            </div>
            <div className="portfolio-description">
              <h6>Web Development</h6>
              <h1>Blog Website</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <a href="#" className="cta">
                View Details
              </a>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-description has-marign-right">
              <h6>Qa Automation</h6>
              <h1>Selenium</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <a href="#" className="cta">
                View Details
              </a>
            </div>
            <div className="portfolio-img">
              <img src={portitem2} alt="port" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
