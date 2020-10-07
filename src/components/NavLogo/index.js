import React from "react";
import Logo from "../../media/plant.svg";

function NavLogo() {
  return (
    <div id="marketing">
      <div id="marketing-logo">
        <img id="marketing-logo-img" src={Logo} alt="" />
      </div>
      <div id="marketing-name">
        <p id="marketing-name-p">MITCHELL</p>
      </div>
    </div>
  );
}

export default NavLogo;
