import React from "react";

function ServiceItem({ image, info, name, price }) {
  console.log('info', info)
  return (
    <div className="serviceItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p>{name}</p>
      <p>{info}</p>
      <p>${price}</p>
    </div>
  );
}

export default ServiceItem;
