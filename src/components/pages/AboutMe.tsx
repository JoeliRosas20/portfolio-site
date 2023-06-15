import React from "react";
import "./AboutMe.css";
import Resume from "./Resume.pdf";

function AboutMe() {

  return (
    <div className="aboutme-container">
      <h1>Who am I?</h1>
      <img className="pic" src="/images/JoelPortrait.jpg"/>
      <div className="aboutme-summary">
        <p>
          Born and raised in New York. From a young age I had an interest in
          technology from computers to video games. I also liked to learn about
          many things from geography to history and philosophies. After I typed
          "Hello World" on my first program in programming method 1, it seems
          that I found something that I wanted to do. Despite having many low
          moments, I learned many things that has only made me more ambitious to
          keep on going.
        </p>
      </div>
      <br />
      <div className="aboutme-education">
        <h1>Education</h1>
        <img className="lehman-image" src="/images/college.png" />
        <div className="aboutme-education-desc">
          <p>
            August 2017-January 2022{" "}
            <i className="fa-solid fa-graduation-cap"></i>
          </p>
          <i>B.S. in Computer Science</i>
          <br />
          <h3>Relevent Courses</h3>
          <p>-Programming method 1 and 2</p>
          <p>-Data structures and algorithims</p>
          <p>-Web development</p>
        </div>
      </div>
      <br />
      <div className="aboutme-skills">
        <h1>Skills</h1>
        <div className="skills-icons">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-java"></i>
          <i className="fa-brands fa-react"></i>
          <img className="typescript" src="/images/typescript.png" />
          <i className="fa-solid fa-database"></i>
        </div>
      </div>
      <br />
      <div className="aboutme-experience">
        <h1>Experiences</h1>
        <div className="aboutme-experience-desc">
          <h3>Revature, Software Engineering</h3>
          <i>January 2022-May 2022</i>
          <p>
            I was trained in many technologies where I would use those skills to
            work on 2 projects and collaborate on 2 group projects to create a
            portfolio so that it can showcased to the clients.
          </p>
          <br />
          <h3>Infosys, Associate</h3>
          <i>May 2022-January 2023</i>
          <p>
            The client I was sold to. I was a Quality Assurance Tester where I
            looked over the website. I also queried in SQL to obtain the users
            data and have it reported in a word and excel document.{" "}
          </p>
        </div>
      </div>
      <br />
      <div className="aboutme-other">
        <h1>Other</h1>
        <p>
          Outside of coding, I am interested in theology, philosophies and other
          ideas. I like to exercise by jogging, biking and lifting. I am
          interested in Sports <i className="fa-solid fa-baseball"></i>
          <i className="fa-solid fa-football"></i>
          <i className="fa-solid fa-futbol"></i>
          <i className="fa-solid fa-basketball"></i>
          <i className="fa-solid fa-hockey-puck"></i>.
        </p>
      </div>
      <br />
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        Click here to download my resume
      </a>
      <br/>
    </div>
  );
}

export default AboutMe;
