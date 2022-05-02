import React from "react";
import BrandName from "./BrandName";

import "./brandList.scss";

const BrandList = () => {
  const brandArray = [
    {
      namebrand: "B&O",
      imgBrand: "byo.jpg",
    },
    {
      namebrand: "Adidas",
      imgBrand: "adidas.jpg",
    },
    {
      namebrand: "Nike",
      imgBrand: "nike.jpg",
    },
    {
      namebrand: "Zara",
      imgBrand: "zara.jpg",
    },
    {
      namebrand: "Quicksilver",
      imgBrand: "quiksilver.jpg",
    },
    {
      namebrand: "GameStop",
      imgBrand: "gamestop.jpg",
    },
    {
      namebrand: "B&O",
      imgBrand: "byo.jpg",
    },
    {
      namebrand: "Adidas",
      imgBrand: "adidas.jpg",
    },
    {
      namebrand: "Nike",
      imgBrand: "nike.jpg",
    },
    {
      namebrand: "Zara",
      imgBrand: "zara.jpg",
    },
    {
      namebrand: "Quicksilver",
      imgBrand: "quiksilver.jpg",
    },
    {
      namebrand: "GameStop",
      imgBrand: "gamestop.jpg",
    },
    {
      namebrand: "B&O",
      imgBrand: "byo.jpg",
    },
    {
      namebrand: "Adidas",
      imgBrand: "adidas.jpg",
    },
    {
      namebrand: "Nike",
      imgBrand: "nike.jpg",
    },
    {
      namebrand: "Zara",
      imgBrand: "zara.jpg",
    },
    {
      namebrand: "Quicksilver",
      imgBrand: "quiksilver.jpg",
    },
    {
      namebrand: "GameStop",
      imgBrand: "gamestop.jpg",
    },
  ];
  return (
    <div className="flex flex-nowrap brand-list gap-4">
      {brandArray.map((e, i) => {
        return <BrandName key={i} name={e.namebrand} img={e.imgBrand} />;
      })}
    </div>
  );
};

export default BrandList;
