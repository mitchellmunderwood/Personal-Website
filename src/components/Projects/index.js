import React from "react";
import "./index.css";

function Projects() {
  return (
    <div class="card-flow">
      <div class="card">
        <div class="card-image">
          <img src="" alt="" />
          <a class="image-repo" href="" title="Repo">
            <i class="fa fa-github-alt fa-2x"></i>
          </a>
          <a class="image-live" href="" title="Deployed">
            <i class="fa fa-arrow-circle-right fa-2x"></i>
          </a>
        </div>
        <div class="card-text">
          <h3 class="project-title">Parent Connect</h3>
          <h6 class="project-text">Homeschool together during COVID</h6>
        </div>
      </div>
    </div>
  );
}

export default Projects;
