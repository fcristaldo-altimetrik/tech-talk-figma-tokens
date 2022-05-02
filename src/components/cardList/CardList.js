import React from "react";
import "./cardList.scss";

import Card from "./Card";

const CardList = () => {
  const cardArray = [
    {
      imgBrand: "nike_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "nike_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "nike_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "adidas_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "adidas_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "adidas_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "macy_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "macy_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "macy_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "nike_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "nike_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
    {
      imgBrand: "nike_b.svg",
      text: "7% Cash Back for today only",
      chips: ["Clothes and shoes", "Sports accesories"],
    },
  ];
  return (
    <div className="p-6">
      <ul className="tabs flex flex-nowrap">
        <li className="tab selected">Featured Stores</li>
        <li className="tab">Popular this week Stores</li>
        <li className="tab">Recently visited</li>
      </ul>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {cardArray.map((e, i) => {
          return (
            <Card key={i} img={e.imgBrand} text={e.text} chips={e.chips} />
          );
        })}
      </div>
      <ul className="tabs flex flex-nowrap">
        <li className="tab">Featured Stores</li>
        <li className="tab selected">Popular this week Stores</li>
        <li className="tab">Recently visited</li>
      </ul>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {cardArray.map((e, i) => {
          return (
            <Card key={i} img={e.imgBrand} text={e.text} chips={e.chips} />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
