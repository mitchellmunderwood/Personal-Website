import React from "react";
import "./index.css";

function IconTitle(props) {
  return (
    <div class="IconContainer">
      <img
        class="IconImage"
        src={process.env.PUBLIC_URL + "/media/icons/" + props.icon}
      />
      <h4 className="IconTitle">{props.title}</h4>
    </div>
  );
}

export default IconTitle;
