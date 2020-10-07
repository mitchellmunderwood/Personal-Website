import React from "react";
import "./index.css";
import NavLogo from "../NavLogo/index";
import NavInternal from "../NavInternal/index";
import NavExternal from "../NavExternal/index";

function NavBar() {
  return (
    <header id="header">
      <NavLogo />
      <nav>
        <div>
          <NavInternal />
          <NavExternal />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
