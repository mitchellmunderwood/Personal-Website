import React from "react";
import HeroVideo from "../../components/HeroVideo/index";
import "./index.css";
import Projects from "../../components/Projects/index";
import Container from "../../components/Container/index";
import Title from "../../components/Title/index";

function Work() {
  return (
    <div id="work-page">
      <HeroVideo />
      <Container>
        <Title title="Work" subtitle="Projects I've worked on." />
        <Projects />
        <Title
          title="About Me"
          subtitle="I'm a creative web developer with design and engineering passion,
           who wants to help you develop your next big thing."
        />
        <Title
          title="Work With Me!"
          subtitle="Have a position you'd like to talk with me about? Email mitchellmunderwood@gmail.com"
        />
      </Container>
    </div>
  );
}

export default Work;
