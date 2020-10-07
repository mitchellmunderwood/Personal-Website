import React from "react";
import "./index.css";
import VideoFile from "../../media/forest.mp4";

function Video() {
  return (
    <video
      id="hero-video"
      src={VideoFile}
      playsInline
      autoPlay
      muted
      loop
    ></video>
  );
}

export default Video;
