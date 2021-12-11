import React from "react";

import MenuItem from "../components/MenuItem";

import image1 from "../images/a_la_mama.jpg";
import image2 from "../images/ribs.jpg";
import image3 from "../images/pulled_pork.jpg";
import image4 from "../images/burger2.jpg";
import image5 from "../images/sandwich.jpg";
import image6 from "../images/burger3.jpg";

import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <div className="menu_container">
        <h1 className="menu_title">The smoked meats</h1>
        <MenuItem
          title="Steak a la mama"
          description="Smoked with applewood and a hint of pine this aged meat is coming from
          free cows fed just with what they find on mountains plains and forests.
          Comes with a side of grilled vegetables and a wild mushroom sauce,
          that brings forward a well-known earthiness connection between the beast
          and reach mountains feeding grounds."
          image={image1}
        />
        <MenuItem
          title="The lingering smoke"
          description="Hickory and herbs smoked ribs. The strong taste will fade quite 
          quickly just to reaper sweeter and fresher after a sip of our special craft beer is
          added to the palate. The special lime and honey infused sauce remind of spring mornings
          in the mountains while the side dish will remind you not to stray too far away from reality. "
          image={image2}
        />
        <MenuItem
          title="The fire whitin"
          description="Plumwood is the smoke with a surprise of habaneros and red chili glaze. This
          pulled pork is the volcano that stands to erupt and fill you with a wonder of sentiments.
          Am I taking fire? Am I freezing? Or I have just been taken to another level in existence? 
          The experience is unique to you and you alone. Word of advice: Just the strong and true will
          endure on this path."
          image={image3}
        />
      </div>
      {/* /////////////////////////////////////SANDWICHES////////////////////////////////////// */}
      <div className="sandwich">
        <h1 className="menu_title">Burgers & Sandwiches</h1>
        <MenuItem
          props_className="Menu_class"
          title="On the road"
          description="The caramelized onions and the chili dressing take the taste buds into 
          an adventure where they will meet the smoked patties and the cheddar cheese having a blast
          with grilled chili peppers. Even though this journey seems spicy, it is tempered by the
          buttery bun, like an old sage is tempering a young rascal."
          image={image4}
        />
        <MenuItem
          props_className="Menu_class"
          title="Am I dreaming?"
          description="The question that rises to one mind when the first bite is taken is it was all a dream?
          is this reality? Homemade chipotle infused barbeque sauce and smoked pulled brisket usually have
          this effect on people, but we are all safe because of the garlic taste of the slaw and the fried kale that
          will take one mind back to the dream world."
          image={image5}
        />
        <MenuItem
          props_className="Menu_class"
          title="Resistance is futile!"
          description="Is not easy to just eat this burger. One bite and the taste will assimilate you, giving you access
          to the world of homemade crispy bacon, cheddar cheese, and butter-fried mushrooms. Every while in a bite,
          your buds will be pinged with a memory of pickles and spicy mayo, while predominant yet complimentary truffle
          sauce will assure you that the collective is where you belong."
          image={image6}
        />
      </div>
    </div>
  );
}

export default Menu;
