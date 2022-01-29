import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/tonysdogservicesunltd/"
        >
          <InstagramIcon />
        </a>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Antonios-Dog-Services-Unlimited-104963222051381"
        >
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2022 tonysdogsunltd.com</p>
    </div>
  );
}

export default Footer;
