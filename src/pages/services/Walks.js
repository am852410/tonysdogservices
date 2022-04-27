import React from "react";
import dogWalking from "../../assets/justina.jpeg";
import "../../styles/Walks.css";

function Walks() {
    return(
        <div className="dogWalks">
      <div
        className="dogWalksLeft"
        style={{ backgroundImage: `url(${dogWalking})` }}
      />
      <div className="dogWalksRight">
        <h1>Neighborhood Walks</h1>
        <div className="dogWalksMiddle">
          <h2>30 Minutes: $25</h2>

          <h2>60 Minutes: $30</h2>

          <h2>+$5 each additional dog</h2>

          <p>
            Dog Walks Include: Dog Walk or Dog Jog around your neighborhood depending on your dogs energy level. This service will 
            ensure your dog's energy is drained.  This gives them the opportunity to relieve themselves, 
            a change of scenery, and outside opportunity to explore their surroundings. They will come back home tired and happy!
          </p>

          <p>
            Additional Services also include: Feed (if necessary) / Replenish water bowl / Take trash out.
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Walks;