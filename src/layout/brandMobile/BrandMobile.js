import React from "react";
import brand from "../../assets/img/logo.svg";

import "./brandMobile.scss";

const BrandMobile = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 brand-mobile">
        <li>
          <img src={brand} alt="solid" title="solid" className="brand" />
        </li>
        <li>
          Lifetime cashback: <strong>$345.32</strong>
        </li>
      </ul>
    </div>
  );
};

export default BrandMobile;
