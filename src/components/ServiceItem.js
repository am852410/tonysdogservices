import React from "react";
import { Link } from "react-router-dom";

function ServiceItem({ image, info, name, price, url }) {
  return (
    <Link className="link" to={`${url}`} >
      <div className="serviceItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <p>{name}</p>
        <p>{info}</p>
      </div>
    </Link>
  );
}

export default ServiceItem;
