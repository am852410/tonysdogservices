import React from "react";
import BannerImage from "../assets/mountains.jpeg";
import "../styles/Login.css";

function Login() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h2>Client Log In</h2>
      <p>
        Create an account and download the app for more features including GPS tracking, pictures, and details about 
        your dogs visit.
      </p>
      <a className="link" href="https://www.timetopet.com/portal/antoniosdogservicesunlimited/create-account">
        <button className="button"> New Client Login </button>
      </a>
      
      <a className="linkTwo" href="https://www.timetopet.com/portal/login">
        <button className="button"> Existing Client Login </button>
      </a>
    </div>
  </div>
 
  );
}

export default Login;