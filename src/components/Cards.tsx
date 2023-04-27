import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"

function Cards() {
  return <div className="cards">
    <h1>These are my projects</h1>
    <div className="card_container">
      <div className="card_wrapper">
        <div className="card_items">
          <CardItem
            src="images/ExerciseSite.png"
            text="My exercise site"
            label="Exercise Site"
            path="/projects"
          />
        </div>
      </div>
    </div>
  </div>;
}

export default Cards;
