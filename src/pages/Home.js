import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Tony's Dog Services Unlimited</h1>
        <p>
          To provide quality services to our canine friends and trust and
          satisfaction to our clients.
        </p>
        <Link to="/menu">
          <button> CHECK OUT OUR SERVICES </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
