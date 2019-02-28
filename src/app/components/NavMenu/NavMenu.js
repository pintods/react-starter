import React from "react";
import { Link } from "@reach/router";

const NavMenu = ({ isExpanded }) => (
  <div
    className={"navbar-menu" + (isExpanded ? " is-active" : "")}
    id="navMenu"
  >
    <div className="navbar-start">
      <Link className="navbar-item" to="/">
        Dashboard
      </Link>
      <Link className="navbar-item" to="about">
        About
      </Link>
    </div>
  </div>
);

export default NavMenu;
