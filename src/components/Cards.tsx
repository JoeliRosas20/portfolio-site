import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Here is what you can see here:</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/Person.png"
              text="Check out here to know more about me"
              label="About Me"
              path="/aboutme"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/Folder.jpg"
              text="Check out here to see my projects"
              label="Projects"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
