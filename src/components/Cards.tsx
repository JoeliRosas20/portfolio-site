import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>These are my projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <div className="cards_items">
            <CardItem
              src="images/ExerciseSite.png"
              text="Useful with tracking my exercises"
              label="Exercise Site"
              path="/projects"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
