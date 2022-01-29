import React from "react";
import dropInVisit from "../../assets/housevisit.jpeg";
import "../../styles/Dropin.css";

function Dropin() {
    return(
        <div className="dropIn">
      <div
        className="dropInLeft"
        style={{ backgroundImage: `url(${dropInVisit})` }}
      />
      <div className="dropInRight">
        <h1>Drop In Visits</h1>
        <div className="dropInMiddle">
          <h2>30 Minutes: $20</h2>

          <h2>60 Minutes: $25</h2>

          <h2>+$5 each additional dog</h2>

          <p>
            Drop In Visits include: Taking your dog outside to relieve itself / Feed (if necessary) / Replenish
            water bowl / Administer medications / Brushing / Grooming. 
          </p>

          <p>
            Additional Services also include: Watering plants / Sweeping and moping of your floors / Taking trash out / 
            Collecting mail and packages.
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Dropin;

