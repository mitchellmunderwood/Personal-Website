import React from "react";
import "./index.css";

function Title(props) {
  return (
    <div>
      <h1 id="title">{props.title}</h1>
      <h4 id="subtitle">{props.subtitle}</h4>
    </div>
  );
}

export default Title;
