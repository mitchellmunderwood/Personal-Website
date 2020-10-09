import React from "react";
import "./index.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={
            process.env.PUBLIC_URL + "/media/projects" + props.project.imageRef
          }
          alt=""
        />
        <a className="image-repo" href={props.project.githubLink} title="Repo">
          <i className="fa fa-github-alt fa-2x"></i>
        </a>
        <a
          className="image-live"
          href={props.project.deployLink}
          title="Deployed"
        >
          <i className="fa fa-arrow-circle-right fa-2x"></i>
        </a>
        <ul class="stack-info">
          {props.project.stack.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
      </div>
      <div className="card-text">
        <h3 className="project-title">{props.project.name}</h3>
        <h6 className="project-text">{props.project.description}</h6>
      </div>
    </div>
  );
}

export default ProjectCard;
