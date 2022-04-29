import React from "react";
import "./home.css";

import Topbar from "../../layout/topbar/Topbar";
import BrandList from "../../components/brandList/BrandList";
import CardList from "../../components/cardList/CardList";

const Home = () => {
  return (
    <div>
      <Topbar />
      <BrandList />
      <CardList />
    </div>
  );
};

export default Home;
