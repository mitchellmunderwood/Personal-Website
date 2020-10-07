import React from "react";
import { Link } from "react-router-dom";

function NavInternal() {
  return (
    <ul class="nav-internal">
      <li>
        <Link to="/me">ME</Link>
      </li>
      <li>
        <Link to="/work">WORK</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
}

export default NavInternal;
