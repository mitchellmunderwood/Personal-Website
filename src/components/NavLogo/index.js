import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavLogo() {
  return (
    <div id="marketing">
      <Link to="/">
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
      </Link>
    </div>
  );
}

export default NavLogo;
