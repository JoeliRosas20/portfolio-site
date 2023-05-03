import React from 'react'

interface Props{
    description: string;
    src: string;
    title: string
}

function ProjectItem({src, title, description}:Props) {
  return (
    <div>ProjectItem</div>
  )
}

export default ProjectItem