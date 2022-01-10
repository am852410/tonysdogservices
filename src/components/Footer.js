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
          href="https://www.instagram.com/tonysdogservicesunltd/"
        >
          <InstagramIcon />
        </a>{" "}
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100076315683145"
        >
          <FacebookIcon />
        </a>
      </div>
      <p> &copy; 2022 tonysdogsunltd.com</p>
    </div>
  );
}

export default Footer;
