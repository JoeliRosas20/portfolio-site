import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>These are my projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/ExerciseSite.png"
              text="Check out here to know more about me"
              label="About Me"
              path="/projects"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/ExerciseSite.png"
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
