import React from "react";

import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>Home</li>
        <li>Book a table</li>
        <li>Contact</li>
      </ul>

      <ul>
        <li>Food</li>
        <li>Concept</li>
        <li>The team</li>
      </ul>
    </nav>
  );
}

export default Navigation;
