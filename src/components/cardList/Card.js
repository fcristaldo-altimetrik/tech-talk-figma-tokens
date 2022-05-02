import React from "react";

import "./card.scss";

const Card = ({ text, img, chips }) => {
  return (
    <div className="card">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 padding-card-info">
          {chips.map((text, i) => (
            <span key={i} className="bagde">
              {text}
            </span>
          ))}

          <h4>{text}</h4>
        </div>
        <div className="align-brand">
          <div className="card-brand">
            <img src={img} alt="" title="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
