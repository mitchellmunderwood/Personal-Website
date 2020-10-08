import React from "react";
import HeroVideo from "../../components/HeroVideo/index";
import "./index.css";
import ProjectsTitle from "../../components/ProjectsTitle/index";
import Projects from "../../components/Projects/index";
import AboutTitle from "../../components/AboutTitle/index";
import WorkTitle from "../../components/WorkTitle/index";
import Container from "../../components/Container/index";

function Work() {
  return (
    <div id="work-page">
      <HeroVideo />
      <Container>
        <ProjectsTitle />
        <Projects />
        <AboutTitle />
        <WorkTitle />
      </Container>
    </div>
  );
}

export default Work;
