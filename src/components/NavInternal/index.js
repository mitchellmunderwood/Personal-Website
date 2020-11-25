import React from "react";
import { Link } from "react-router-dom";

function NavInternal() {
  return (
    <ul className="nav-internal">
      <li>
        <Link to="/Portfolio-1.2-React/me">ME</Link>
      </li>
      <li>
        <Link to="/Portfolio-1.2-React/work">WORK</Link>
      </li>
      <li>
        <Link to="/Portfolio-1.2-React/contact">CONTACT</Link>
      </li>
    </ul>
  );
}

export default NavInternal;
