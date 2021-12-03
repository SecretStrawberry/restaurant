import React from "react";

import Navigation from "./Navigation";

import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <header className="header">
        <Navigation />
      </header>

      <div className="hero_title">
        <h1>Smoking House</h1>
        {/* <p>Welcome to our home</p> */}
      </div>
      <p>Authentic Tennessee BBQ smoked meats</p>
    </div>
  );
}

export default Hero;
