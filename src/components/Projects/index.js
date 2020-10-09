import React from "react";
import "./index.css";
import ProjectCard from "../ProjectCard/index";
import ProjectInfo from "../../data/projects";

function Projects() {
  return (
    <div class="card-flow">
      {ProjectInfo.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Projects;
