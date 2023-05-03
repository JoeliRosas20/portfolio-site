import React from "react";
import ProjectItem from "../ProjectItem";
import './Projects.css'

function Projects() {
  return (
    <div className="projects-container">
      <h1>What I have done</h1>
      <ProjectItem
        src="images/spacegame.gif"
        title="Space Explorers"
        description="A game I designed "
      />
    </div>
  );
}

export default Projects;
