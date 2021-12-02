import React from "react";

import "./Food.scss";

import image1 from "../images/a_la_mama.jpg";
import image2 from "../images/ribs.jpg";
import image3 from "../images/pulled_pork.jpg";

function MenuItem(props) {
  return (
    <div className="food_courses">
      <h3>
        <span>&#8275;</span> {props.title} <span>&#8275;</span>
      </h3>
      <div className="food_courses-content">
        <p>{props.description}</p>
        <div className="food_courses-content_image">
          <img src={props.image} alt="steak a la mama with vegies and sauce" />
        </div>
      </div>
    </div>
  );
}

function Food() {
  return (
    <div className="food">
      <div className="food_category food_category--1">
        <MenuItem
          title="Steak a la mama"
          description="Smoked with applewood and a hint of pine this aged meat is coming from
          free cows fed just with what they find on mountains plains and forest.
          Comes with a side of grilled vegetables and a wild mushroom sauce,
          that brings forward a well-known earthiness connection between beast
          and reach mountains feeding grounds."
          image={image1}
        />
        <MenuItem
          title="The lingering smoke"
          description="Hickory and herbs smoked ribs. The strong taste will fade quite 
          quickly just to reaper sweeter and fresher after a sip of our special craft beer is
          added to the palate. The special lime and honey infused sauce remind of spring mornings
          in the mountains while the side dish will remind you not to stray to far away from reality. "
          image={image2}
        />
        <MenuItem
          title="The fire whitin"
          description="Plumwood is the smoke with a surprise of habaneros and red chili glaze. This
          pulled pork is the vulcano that stands to erupt and fill you with a wonder of sentiments.
          Am I taking fire? Am I freezing? Or I have just been taken to onother level in existance? 
          The expericence is unique to you and you alone. Word of advice: Just the stong and true will
          endure on this path."
          image={image3}
        />
      </div>
      <div className="image_container"></div>
    </div>
  );
}

export default Food;
