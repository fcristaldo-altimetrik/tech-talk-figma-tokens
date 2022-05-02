import React from "react";
import BrandMobile from "../../layout/brandMobile/BrandMobile";
import Onboarding from "../onboarding/Onboarding";
import Topbar from "../../layout/topbar/Topbar";
import BrandList from "../../components/brandList/BrandList";
import CardList from "../../components/cardList/CardList";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <BrandMobile />
      <Topbar />
      <BrandList />
      <CardList />
      <Onboarding />
    </div>
  );
};

export default Home;
