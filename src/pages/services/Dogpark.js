import React from "react";
import dogPark from "../../assets/dogparkvisit.jpeg";
import "../../styles/Dogpark.css";

function Dogparkvisits() {
    return(
        <div className="dogPark">
      <div
        className="dogParkLeft"
        style={{ backgroundImage: `url(${dogPark})` }}
      />
      <div className="dogParkRight">
        <h1>Dog Park Visits</h1>
        <div className="dogParkMiddle">
          <h2>60-90 Minutes: $35</h2>

          <h2>+$10 each additional dog</h2>

          <p>
            Dog Park Visits Include: Trip to your local dog park. This service will provide the most undivided attention
            in ensuring your dog's energy is reduced drastically so that they can relax when they arrive home. This 
            will also provide important socialization with other dogs. 
          </p>

          <p>
            Additional Services also include: Feed (if necessary) / Replenish water bowl / Administer medications.
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Dogparkvisits;