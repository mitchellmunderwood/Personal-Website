import React from "react";
import "./index.css";

function ProjectCard(props) {
  return (
    <div class="card">
      <div class="card-image">
        <img
          src={
            process.env.PUBLIC_URL + "/media/projects" + props.project.imageRef
          }
          alt=""
        />
        <a class="image-repo" href={props.project.githubLink} title="Repo">
          <i class="fa fa-github-alt fa-2x"></i>
        </a>
        <a class="image-live" href={props.project.deployLink} title="Deployed">
          <i class="fa fa-arrow-circle-right fa-2x"></i>
        </a>
      </div>
      <div class="card-text">
        <h3 class="project-title">{props.project.name}</h3>
        <h6 class="project-text">{props.project.description}</h6>
      </div>
    </div>
  );
}

export default ProjectCard;
