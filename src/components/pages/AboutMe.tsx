import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <h1>Who am I?</h1>
      <p>Insert photo here</p>
      <div className="aboutme-summary">
        <p>Born and raised in New York. From a young age I had an interest in technology 
          from computers to video games. I also liked to learn about many things from geography
          to history and philosophies 
          I am a software developer. I began to code when I was in college. 
          </p>
      </div>
      <br/>
      <div className="aboutme-education">
        <h1>Education</h1>
        <img src="/images/college.png" />
        <p>August 2017-January 2022 <i className="fa-solid fa-graduation-cap"></i></p>
        <br/>
        <h3>Relevent Courses</h3>
        <p>-Programming method 1 and 2</p>
        <p>-Data structures and algorithims</p>
        <p>-Web development</p>
      </div>
      <br/>
      <div className="aboutme-skills">
        <h1>Skills</h1>
        <div className="skills-icons">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-java"></i>
          <i className="fa-brands fa-react"></i>
          <img className="typescript" src="/images/typescript.png"/>
        </div>
      </div>
      <br/>
      <div className="aboutme-other">
        <h1>Other</h1>
      </div>
    </div>
  );
}

export default AboutMe;
