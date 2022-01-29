import React from "react";
import dogHiking from "../../assets/hiking1.jpeg";
import "../../styles/Hiking.css";

function Hiking() {
    return(
        <div className="dogHiking">
      <div
        className="dogHikingLeft"
        style={{ backgroundImage: `url(${dogHiking})` }}
      />
      <div className="dogHikingRight">
        <h1>Hiking Adventures</h1>
        <div className="dogHikingMiddle">
          <h2>90-120 Minutes: $50</h2>

          <h2>+$10 each additional dog</h2>

          <p>
            Dog Hiking Adventures Include: Trip to a local hiking trail! San Diego has several 
            dog friendly trails that will provide a fun experience for your dog.
            This service will allow your dog to get a solid workout and beautiful natural scenery providing 
            epic views and memories your dog will never forget.
          </p>

          <p>
            Additional Services also include: Plenty of Water / Feed (if necessary) / Replenish water bowl / Administer medications.
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Hiking;