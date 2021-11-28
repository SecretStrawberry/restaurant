import React from "react";

import "./Food.scss";

function Food() {
  return (
    <div className="food">
      <div className="food_menu">
        <div className="food_category">
          <h1>Steaks</h1>
          <div className="food_courses">
            <p>Steak a la mama</p>
            <p>Smoking firewater</p>
            <p>Pepper on the nose</p>
            <p>Wish I had some milk</p>
          </div>
        </div>
        <div className="food_category">
          <h1>Sandwiches</h1>
        </div>
        <div className="food_category">
          <h1>Burgers</h1>
        </div>
      </div>
    </div>
  );
}

export default Food;
