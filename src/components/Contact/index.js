import React from "react";
import "./styles.scss";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-heading">
            <h1>Contact</h1>
            <h6>Let's work together</h6>
          </div>
          <form action="submit">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name.. "
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email.. "
              required
            />

            <label htmlFor="service">Services:</label>
            <select name="services" id="service">
              <option value="">Web Development</option>
              <option value="">QA Automation</option>
            </select>
            <label htmlFor="subject">Subject:</label>
            <textarea
              name="subject"
              id="subject"
              cols="10"
              rows="10"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
