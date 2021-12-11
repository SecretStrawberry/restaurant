import React from "react";

import "./MenuItem.scss";

function MenuItem(props) {
  return (
    <div className={`food_courses ${props.props_className}`}>
      <div className="food_courses-content">
        <div className="food_text">
          <h3>
            <span>&#8275;</span> {props.title} <span>&#8275;</span>
          </h3>
          <p>{props.description}</p>
        </div>

        <div className="food_courses-content_image">
          <img src={props.image} alt="steak a la mama with vegies and sauce" />
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
