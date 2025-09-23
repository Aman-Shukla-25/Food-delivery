import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // NavLink use kiya active link ke liye
import "./navBar_two.css";
import deliveryIcon from "../../assets/images/deliveryIcon.png";

import paanCornerImage from "../../assets/images/paan_Corner.avif";
import dairyBreadImage from "../../assets/images/dairy_Bread.avif";
import fruitsVegImage from "../../assets/images/fruits_Vegitables.avif";
import coldDrinkImage from "../../assets/images/cold_Drink.avif";
import laysChipsImage from "../../assets/images/lays_Chips.avif";
import cornFlakesImage from "../../assets/images/corn_Flakes.avif";
import iceCreamImage from "../../assets/images/ice_Cream.avif";
import oreoBiscuitImage from "../../assets/images/oreo_Biscuit.avif";
import teaCoffeeImage from "../../assets/images/tea_Coffe.avif";
import attaDalChawalImage from "../../assets/images/aatadal_Chawal.avif";
import fortuneRefindImage from "../../assets/images/fortune_Refind.avif";
import sauceTomatoImage from "../../assets/images/sauce_Tomato.avif";
import chickenFishImage from "../../assets/images/chicken_Fish.avif";
import organicProductImage from "../../assets/images/organic_Product.avif";
import manypocoPantsImage from "../../assets/images/manypoco_Pants.avif";
import personalSamanImage from "../../assets/images/personal_Saman.avif";
import surfexcelTideImage from "../../assets/images/surfexcel_Tide.avif";
import feviStickImage from "../../assets/images/fevi_Stick.avif";
import shampooSoapImage from "../../assets/images/shampoo_Soap.avif";
import petCareImage from "../../assets/images/pet_Care.avif";

const imageCategories = [
  { name: "Paan Corner", imgUrl: paanCornerImage },
  { name: "Dairy, Bread & Eggs", imgUrl: dairyBreadImage },
  { name: "Fruits & Vegetables", imgUrl: fruitsVegImage },
  { name: "Cold Drinks & Juices", imgUrl: coldDrinkImage },
  { name: "Snacks & Munchies", imgUrl: laysChipsImage },
  { name: "Breakfast & Instant Food", imgUrl: cornFlakesImage },
  { name: "Sweet Tooth", imgUrl: iceCreamImage },
  { name: "Bakery & Biscuits", imgUrl: oreoBiscuitImage },
  { name: "Tea, Coffee & Health Drink", imgUrl: teaCoffeeImage },
  { name: "Atta, Rice & Dal", imgUrl: attaDalChawalImage },
  { name: "Masala, Oil & More", imgUrl: fortuneRefindImage },
  { name: "Sauces & Spreads", imgUrl: sauceTomatoImage },
  { name: "Chicken, Meat & Fish", imgUrl: chickenFishImage },
  { name: "Organic & Healthy Living", imgUrl: organicProductImage },
  { name: "Baby Care", imgUrl: manypocoPantsImage },
  { name: "Personal Care", imgUrl: personalSamanImage },
  { name: "Cleaning Essentials", imgUrl: surfexcelTideImage },
  { name: "Home & Office", imgUrl: feviStickImage },
  { name: "Pharma & Wellness", imgUrl: shampooSoapImage },
  { name: "Pet Care", imgUrl: petCareImage },
];

const NavBarTwo = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <nav className="main-nav">
      <div className="left-section">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/deals"
              className={({ isActive }) =>
                isActive ? "nav-item active-link" : "nav-item"
              }
            >
              Deals
            </NavLink>
          </li>

          <li>
            <button
              className={`has-dropdown ${openDropdown === "megaMenu" ? "active-link" : ""}`}
              onClick={() => handleClick("megaMenu")}
              aria-expanded={openDropdown === "megaMenu"}
              aria-controls="mega-menu-content"
            >
              Mega Menu
              <i
                className={`fa-solid fa-chevron-${
                  openDropdown === "megaMenu" ? "up" : "down"
                } dropdown-arrow`}
              ></i>
            </button>

            {openDropdown === "megaMenu" && (
              <div id="mega-menu-content" className="mega-menu image-grid-menu">
                <div className="image-grid-container">
                  {imageCategories.map((item, index) => (
                    <NavLink
                      key={index}
                      to={`/categories/${item.name.replace(/ /g, "-").toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive ? "image-grid-item active-link" : "image-grid-item"
                      }
                      onClick={() => setOpenDropdown(null)}
                    >
                      <img src={item.imgUrl} alt={item.name} />
                      <div className="item-text">{item.name}</div>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="helpline-section">
        <i className="fa-solid fa-phone phone-icon"></i>
        <div>
          <div className="helpline-number">1900 - 888</div>
          <div className="support-text">24/7 Support Center</div>
        </div>
      </div>

      <div className="delivery-partner-animation">
        <img
          src={deliveryIcon}
          alt="Delivery Rider Icon"
          className="animated-logo"
        />
      </div>
    </nav>
  );
};

export default NavBarTwo;
