import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/happypup.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h2>Antonio's Dog Services Unlimited</h2>
        <p>
          To provide quality services to our canine friends and trust and
          satisfaction to our clients.
        </p>
        <Link to="/services">
          <button className="button"> CHECK OUT OUR SERVICES </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
