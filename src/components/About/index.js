import React from "react";
import image from "../../images/profile.jpeg";
import "./styles.scss";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="profile-img">
            <img src={image} alt="profile" />
          </div>
          <div className="about-details">
            <div className="about-heading">
              <h1>About</h1>
              <h6>Myself</h6>
            </div>
            <p>
              I'm the Front-End Developer. I have serious passion for UI
              effects, animations and creating intuitive, dynamic user
              experiences. Let's make something special.
            </p>

            <div className="social-media">
              <ul className="nav-list">
                <li>
                  <a href="#" className="icon-link">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon-link">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
