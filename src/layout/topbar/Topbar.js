import React from "react";
import brand from "../../assets/img/logo.svg";

import "./topbar.css";

const Topbar = () => {
  return (
    <header className="topbar">
      <nav>
        <ul className="flex justify-between">
          <li>
            <ul className="list-item">
              <li>
                <img src={brand} alt="solid" title="solid" />
              </li>
              <li>Lifetime cashback: $345.32</li>
            </ul>
          </li>
          <li>
            <ul className="list-item">
              <li>
                <i className="category_icon"></i> Categories
              </li>
              <li>
                <i className="category_user"></i>Profile
              </li>
              <li>Search stores & categories</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
