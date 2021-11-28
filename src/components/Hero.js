import React from "react";
import Navigation from "./Navigation";

import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <header className="header"></header>
      <div className="side_nav">
        <Navigation />
      </div>
      <div className="hero_title">
        <h1>Smoking House</h1>
        <p>Welcome home</p>
      </div>
    </div>
  );
}

export default Hero;
