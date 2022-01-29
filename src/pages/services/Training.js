import React from "react";
import dogTraining from "../../assets/dogwalk1.jpeg";
import "../../styles/Training.css";

function Training() {
    return(
        <div className="dogTraining">
      <div
        className="dogTrainingLeft"
        style={{ backgroundImage: `url(${dogTraining})` }}
      />
      <div className="dogTrainingRight">
        <h1>Dog Training</h1>
        <div className="dogTrainingMiddle">
          
          <h2>Motivational Training: $45</h2>

          <h2>Individualized Training: $55</h2>

          <p>
            Motivational and Trust training offers technique's to help your dog with
            Recall, Sitting, Walking, Staying, and Sociability Training.  
          </p>

          <p>
            Individualized training offers unique training for dogs with problems 
            such as fear, hyperactivity, aggression, separation anxiety, excessive
            barking, insecurity and destructive behaviors. 
          </p>
          
        </div>
      </div>
    </div>

    )
}

export default Training;