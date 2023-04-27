import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"

function Cards() {
  return <div className="cards">
    <h1>These are my projects</h1>
    <div className="card_container">
      <div className="card_wrapper">
        <div className="card_items">
          {/*<CardItem/>*/}
        </div>
      </div>
    </div>
  </div>;
}

export default Cards;
