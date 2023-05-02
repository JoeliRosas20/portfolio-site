import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-education">
        <h1>Who am I?</h1>
        <h2>Education</h2>
        <img src="/images/college.png" />
      </div>
      <div className="aboutme-skills">
        <h2>Skills</h2>
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3-alt"></i>
        <i className="fa-brands fa-js"></i>
        <i className="fa-brands fa-java"></i>
      </div>
      <div className="aboutme-summary">
        <p>
          I am a software developer who has a passion for learning and wanting
          to help others.
        </p>
        <br />
        <p>I began to code when I was in college.</p>
        <br />
        <p>From there, it all went well.</p>
      </div>
    </div>
  );
}

export default AboutMe;
