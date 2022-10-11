import React from "react";
import "./Aboutus.css";
const AboutUs = () => {
  return (
    <div>
      <div class="about-section">
        <h1>About Us</h1>
        <p>This Project is based on Mern Stack</p>
        <p>Our Training Project</p>
      </div>

      <h2 className="OurTeam">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="meet.jpeg" alt="Meet" className="profile" />
            <div class="container">
              <h2>Meet Kothari</h2>
              <p class="title">Clan Fellow</p>
              <p>Frontend Backend UI</p>
              <a href="mailto: reachmsk@gmail.com">Send Email</a>
              <p>
                <a href="https://www.linkedin.com/in/kothari-meet/">
                  <button class="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="indranil.jpeg" alt="Indranil" />
            <div class="container">
              <h2>Indranil Champati</h2>
              <p class="title">Clan Fellow</p>
              <p>Frontend Backend UX</p>
              <a href="mailto: champatiindranil@gmail.com">Send Email</a>
              <p>
                <a href="https://www.linkedin.com/in/indranilchampati/">
                  <button class="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
