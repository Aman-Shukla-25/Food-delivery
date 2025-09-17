import React from "react";
import "./FoodAnimation.css";

// Apni images assets folder me daal do
import burger from "../../assets/images/burger.png";
import fries from "../../assets/images/fries.png";
import coffee from "../../assets/images/coffe.png";
import icecream from "../../assets/images/iceecream.png";
import donut from "../../assets/images/dount.png";
import pizza from "../../assets/images/pizza.png";
import cupcake from "../../assets/images/cupcake.png";

export default function FoodAnimation() {
  return (
    <div className="food-container">
      <h1 className="title">Your Bio Link, but Make it Stylish ✨</h1>

      {/* Floating food items */}
      <img src={burger} alt="burger" className="food-item item1" />
      <img src={fries} alt="fries" className="food-item item2" />
      <img src={coffee} alt="coffee" className="food-item item3" />
      <img src={icecream} alt="icecream" className="food-item item4" />
      <img src={donut} alt="donut" className="food-item item5" />
      <img src={pizza} alt="pizza" className="food-item item6" />
      <img src={cupcake} alt="cupcake" className="food-item item7" />
    </div>
  );
}
