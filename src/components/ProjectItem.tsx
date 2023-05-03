import React from "react";

interface Props {
  description: string;
  src: string;
  title: string;
}

function ProjectItem({ src, title, description }: Props) {
  return (
    <>
      <div className="project_item">
        <img src={src} alt="Project Image" className="project_item_img" />
        <div className="project_item_title"><h1>{title}</h1></div>
        <div className="project_item_info">{description}</div>
      </div>
    </>
  );
}

export default ProjectItem;
