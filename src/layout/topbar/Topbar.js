import React from "react";
import { category } from "../../assets/icon/category";
import { home } from "../../assets/icon/home";
import { search_normal } from "../../assets/icon/search-normal";
import { user } from "../../assets/icon/user";
import { logo } from "../../assets/img/logo";

import "./topbar.scss";

const Topbar = () => {
  return (
    <header className="topbar nav-mobile">
      <nav>
        <ul className="flex justify-between">
          <li className="hidden-mobile">
            <ul className="list-item">
              <li className="brand">{logo}</li>
              <li>Lifetime cashback: $345.32</li>
            </ul>
          </li>
          <li>
            <ul className="list-item">
              <li className="active">
                <i className="category_home">{home}</i> Home
              </li>
              <li>
                <i className="category_icon">{category}</i> Categories
              </li>
              <li>
                <i className="category_user">{user}</i>Profile
              </li>
              <li className="box-search">
                <i className="icon_search">{search_normal}</i>
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
