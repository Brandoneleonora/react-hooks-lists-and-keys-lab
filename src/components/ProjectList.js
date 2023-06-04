import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const proj = projects.map(prjObj =>{
    return <ProjectItem key={prjObj.id} name={prjObj.name} about={prjObj.about} technologies={prjObj.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{proj}</div>
    </div>
  );
}

export default ProjectList;
