import React from "react";
import dogTraining from "../../assets/hermoine.jpeg";
import "../../styles/Training.css";

function Training() {
    return(
        <div className="dogTraining">
      <div
        className="dogTrainingLeft"
        style={{ backgroundImage: `url(${dogTraining})` }}
      />
      <div className="dogTrainingRight">
        <h1>In Home Dog Sitting</h1>
        <div className="dogTrainingMiddle">
          
          <h2>Half Day Hours 8pm-8am: $50</h2>
          <h2>Additional Dog: +$10</h2>

          <h2>Full Day (24hrs): $100</h2>
          <h2>Additional Dog: +$10</h2>

          <p>
            Half Day Dog Sitting services offer a 1 hr morning and evening walk, spending the 
            night in your home attending to any of your dog's needs. Special meal preparation,
            medication administration and the cleanliness of your home. We will ensure your 
            dog and your home is safe and in the best care.  
            
          </p>

          <p>
            Full Day Dog Sitting services offer 24 hr care. This includes the BEST care providing
            100% attention to your dog. Will go on 2 neighborhood walks and everyday trips to 
            a dog park, beach, or hiking trail. This also includes Overnight stay, special meal 
            preparation, medication administration and the cleanliness of your home. 
            
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Training;