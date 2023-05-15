import React from "react";

interface Props {
  description: string;
  src: string;
  title: string;
  link: string;
  extraLink?: string;
}

function ProjectItem({ src, title, description, link}: Props) {
  return (
    <>
      <div className="project_item">
        <img src={src} alt="Project Image" className="project_item_img" />
        <div className="project_item_info">
          <h1 className="project_item_title">{title}</h1>
          <div className="project_item_desc">
            {description}
            <br/>
            <h3>Links</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
