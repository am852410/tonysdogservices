import React from "react";
import dogBeach from "../../assets/dogbeach1.jpeg";
import "../../styles/Dogbeach.css";

function Dogbeachvisits() {
    return(
        <div className="dogBeach">
      <div
        className="dogBeachLeft"
        style={{ backgroundImage: `url(${dogBeach})` }}
      />
      <div className="dogBeachRight">
        <h1>Dog Beach Visits</h1>
        <div className="dogBeachMiddle">
          <h2>60-90 Minutes: $40</h2>

          <h2>+$10 each additional dog</h2>

          <p>
            Dog Beach Visits Include: Trip to your local dog beach! This service will provide a beach experience 
            at either Ocean Beach Dog Beach or Coronado Dog Beach depending on your location. They will have the 
            freedom to run and swim amongst other dogs and experience the San Diego beach life we all love 
            to enjoy. Your dog will have a great time and will be tired for hours!
          </p>

          <p>
            Additional Services also include: Rinse and dry your dog /  Feed (if necessary) / Replenish water bowl / Administer medications.
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Dogbeachvisits;