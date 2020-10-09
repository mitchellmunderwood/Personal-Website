import React from "react";
import "./index.css";

function HeroVideo() {
  return (
    <div id="hero-container">
      <video
        id="hero-video"
        src={process.env.PUBLIC_URL + "/media/forest.mp4"}
        playsInline
        autoPlay
        muted
        loop
      ></video>
      <section id="hero">
        <h1 className="title hero-title">Designer. Engineer.</h1>
        <h2 className="title hero-subtitle">
          I am a creative web developer in Raleigh.
        </h2>
      </section>
    </div>
  );
}

export default HeroVideo;
