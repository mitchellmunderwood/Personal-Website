import React from "react";
import "./index.css";
// import Video from "../../components/Video/index";
import VideoFile from "../../media/forest.mp4";

function HeroVideo() {
  return (
    <div id="hero-container">
      <video
        id="hero-video"
        src={VideoFile}
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
