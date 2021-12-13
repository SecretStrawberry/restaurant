import React from "react";
import Navigation from "./Navigation";

import { IoMenu } from "react-icons/io5";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <header className="header">
        <IoMenu className="nav_icon" />
        <Navigation />
      </header>

      <div className="hero_title">
        <h1>Smoking House</h1>
        <p>Authentic Tennessee BBQ smoked meats</p>
      </div>

      <button className="btn">Book a dinner</button>
    </div>
  );
}

export default Hero;
