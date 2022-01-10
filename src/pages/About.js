import React from "react";
import AboutMe from "../assets/about.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutLeft"
        style={{ backgroundImage: `url(${AboutMe})` }}
      />
      <div className="aboutRight">
        {/* <div className="aboutBottom" /> */}
        <h1> ABOUT </h1>
        <div className="aboutMiddle">
          <h2> MEET ANTONIO </h2>
          <p>
            Antonio Mendoza is an energetic and skilled specialist in canines of
            all types, shapes, and sizes. He began his professional career
            working for Rover.com in 2018. Since then, he has gained the trust
            and loyalty of all his clients and has made it a priority to make
            sure that all his clients are completely satisfied with the care he
            provides in his services. Meeting the needs of his canine clients is
            always a priority.
          </p>

          <p>
            His love and admiration for canines inspired him to pursue his dream
            of opening up his own business. In 2020, Antonio's vision of opening
            up a Dog Service business became a reality. He successfully
            completed a Full Stack Software Engineering Bootcamp through General
            Assembly to learn how to build his own website for his business to
            thrive.
          </p>
          <p>
            Antonio promises to engage with his clients with a view to aiding
            them by providing their canine companions with world class care and
            give the client peace of mind while they are away.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
