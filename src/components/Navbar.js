import React, { useState } from "react";
import Logo from "../assets/dog_logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavBar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo of dog" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/services"> Services </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Services </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavBar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
