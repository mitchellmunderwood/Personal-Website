import React from "react";
import "./index.css";

function NavLogo() {
  return (
    <div id="marketing">
      <div id="marketing-logo">
        <img
          id="marketing-logo-img"
          src={process.env.PUBLIC_URL + "/media/plant.svg"}
          alt=""
        />
      </div>
      <div id="marketing-name">
        <p id="marketing-name-p">MITCHELL</p>
      </div>
    </div>
  );
}

export default NavLogo;
