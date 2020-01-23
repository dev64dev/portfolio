import React from "react";
import "./styles.scss";

const Experience = () => {
  return (
    <div>
      <section className="experience" id="experience">
        <div className="container">
          <div className="section-heading">
            <h1>Work Experience</h1>
            <h6>Past Jobs</h6>
          </div>
          <div className="timeline">
            <ul>
              <li className="date" data-date="2019 - Present">
                <h1>Prologic</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </li>
              <li className="date" data-date="2014 - 2019">
                <h1>Ynet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </li>
              <li className="date" data-date="2010 - 2014">
                <h1>Burlington English</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
