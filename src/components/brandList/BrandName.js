import React from "react";

import "./brandName.scss";

const BrandName = ({ name, img }) => {
  return (
    <div className="description-brand">
      <div className="border-gradient">
        <div className="round-brand">
          <img src={img} alt="" title="" />
        </div>
      </div>
      <span className="name">{name}</span>
    </div>
  );
};

export default BrandName;
