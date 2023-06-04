import React from "react";

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map((t1, index) =>{
    return <span key={index}>{t1}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
