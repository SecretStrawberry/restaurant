import React from "react";

import "./Navigation.scss";

import logo from "../images/logo_cow.png";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>Book a table</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
      <img src={logo} alt="cow head" />
      <ul>
        <li>Menu</li>
        <li>Concept</li>
        <li>The team</li>
      </ul>
    </nav>
  );
}

export default Navigation;
