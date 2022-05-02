import React from "react";
import brand from "../../assets/img/logo.svg";

import "./topbar.scss";

const Topbar = () => {
  return (
    <header className="topbar nav-mobile">
      <nav>
        <ul className="flex justify-between">
          <li className="hidden-mobile">
            <ul className="list-item">
              <li>
                <img src={brand} alt="solid" title="solid" className="brand" />
              </li>
              <li>Lifetime cashback: $345.32</li>
            </ul>
          </li>
          <li>
            <ul className="list-item">
              <li>
                <i className="category_home"></i> Home
              </li>
              <li>
                <i className="category_icon"></i> Categories
              </li>
              <li>
                <i className="category_user"></i>Profile
              </li>
              <li className="box-search">
                <i className="icon_search"></i>
                <span className="hidden-mobile">
                  Search stores & categories
                </span>
                <span className="name-mobile">Search</span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
