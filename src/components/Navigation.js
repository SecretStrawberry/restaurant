import React from "react";

import "./Navigation.scss";

import logo from "../images/logo_cow.png";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>Home</li>
        <li>Book a table</li>
        <li>Contact</li>
      </ul>
      <img src={logo} alt="cow head" />
      <ul>
        <li>Food</li>
        <li>Concept</li>
        <li>The team</li>
      </ul>
    </nav>
  );
}

export default Navigation;
