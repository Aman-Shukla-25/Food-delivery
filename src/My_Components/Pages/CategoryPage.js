import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "./CategoryPage.css"; 


// FOR IMAGES
import banarsi_pan from "../../assets/images/banarsi_pan.jpg";
import meetha_pan from "../../assets/images/meetha_pan.jpg";
import amul_one_liter from "../../assets/images/amul_one_liter.jpg";
import brown_bread from "../../assets/images/brown_bread.jpg";
import eggs from "../../assets/images/eggs.jpg";
import apples from "../../assets/images/apples.jpg";
import banana from "../../assets/images/banana.jpg";
import tomatoes from "../../assets/images/tomatoes.jpg";
import pepsi from "../../assets/images/pepsi.jpg";
import thums_up from "../../assets/images/thums_up.jpg";
import coca_cola from "../../assets/images/coca_cola.jpg";
import real_juice from "../../assets/images/real_juice.jpg";
import tropicana from "../../assets/images/tropicana.jpg";
import lays from "../../assets/images/lays.jpg";
import kurkure from "../../assets/images/kurkure.jpg";
import bingo from "../../assets/images/bingo.jpg";
import cornflakes from "../../assets/images/cornflakes.jpg";
import oats from "../../assets/images/oats.jpg";
import maggie from "../../assets/images/maggie.jpg";
import dairymilk from "../../assets/images/dairymilk.jpg";
import rasgulla from "../../assets/images/rasgulla.jpg";
import gulabjamun from "../../assets/images/gulabjamun.jpg";
import mariegold from "../../assets/images/mariegold.jpg";
import oreo from "../../assets/images/oreo.jpg";
import parleg from "../../assets/images/parleg.jpg";
import nescaffecoffe from "../../assets/images/nescaffecoffe.jpg";
import tatatea from "../../assets/images/tatatea.jpg";
import bournvita from "../../assets/images/bournvita.jpg";
import arhardaal from "../../assets/images/arhardaal.jpg";
import aataaashirwaad from "../../assets/images/aataaashirwaad.jpg";
import basmati from "../../assets/images/basmati.jpg";
import laalmirch from "../../assets/images/laalmirch.jpg";
import oilfortune from "../../assets/images/oilfortune.jpg";
import mdhmasala from "../../assets/images/mdhmasala.jpg";
import jam from "../../assets/images/jam.jpg";
import saucekissan from "../../assets/images/saucekissan.jpg";
import myononise from "../../assets/images/myononise.jpg";
import chickenonekg from "../../assets/images/chickenonekg.jpg";
import fish from "../../assets/images/fish.jpg";
import mutton1kg from "../../assets/images/mutton1kg.jpg";
import honeyshahed from "../../assets/images/honeyshahed.jpg";
import brownriceorgnic from "../../assets/images/brownriceorgnic.jpg";
import diaper from "../../assets/images/diaper.jpg";
import baby_loation from "../../assets/images/baby_loation.jpg";
import colgate from "../../assets/images/colgate.jpg";
import dettol from "../../assets/images/dettol.jpg";
import shampobottle from "../../assets/images/shampobottle.jpg";
import excelsurf from "../../assets/images/excelsurf.jpg";
import tide from "../../assets/images/tide.jpg";
import dettol_sabun from "../../assets/images/dettol_sabun.jpg";
import stickfevi from "../../assets/images/stickfevi.jpg";
import a_fourpaper from "../../assets/images/a_fourpaper.jpg";
import walnutscrub from "../../assets/images/walnutscrub.jpg";
import goldenglow from "../../assets/images/goldenglow.jpg";
import dogfood from "../../assets/images/dogfood.jpg";
import catfood from "../../assets/images/catfood.jpg";
import petshampoo from "../../assets/images/petshampoo.jpg";

//import cocaColaImg from "../assets/images/coca_cola.jpg";
//import laysImg from "../assets/images/lays.png";
//import appleImg from "../assets/images/apple.png";


// --- Products data ---
const productsData = {
  "paan-corner": [
    { id: 1, name: "Banarasi Paan", price: 30, img: banarsi_pan },
    { id: 2, name: "Calcutta Meetha Paan", price: 40, img: meetha_pan },
  ],
  "dairy,-bread-&-eggs": [
    { id: 1, name: "Amul Milk 1L", price: 60, img: amul_one_liter },
    { id: 2, name: "Brown Bread", price: 35, img: brown_bread },
    { id: 3, name: "Farm Eggs 6pc", price: 70, img: eggs },
  ],

  "fruits-&-vegetables": [
    { id: 1, name: "Apple (1kg)", price: 150, img: apples },
    { id: 2, name: "Banana (1 dozen)", price: 60, img: banana },
    { id: 3, name: "Tomato (1kg)", price: 40, img: tomatoes },
  ],

  "cold-drinks-&-juices": [
    { id: 1, name: "Pepsi 1L", price: 60, img: pepsi },
    { id: 2, name: "Coca-Cola 1L", price: 65, img: coca_cola },
    { id: 3, name: "Thums Up 750ml", price: 55, img: thums_up },
    { id: 4, name: "Tropicana Juice", price: 120, img: tropicana },
    { id: 5, name: "Real Juice", price: 110, img: real_juice },
  ],

  "snacks-&-munchies": [
    { id: 1, name: "Lays Chips", price: "₹20", img: lays },
    { id: 2, name: "Kurkure", price: "₹10", img: kurkure },
    { id: 3, name: "Bingo Chips", price: "₹25", img: bingo },
  ],

  "breakfast-&-instant-food": [
    { id: 1, name: "Corn Flakes", price: "₹180", img: cornflakes },
    { id: 2, name: "Maggi 8 Pack", price: "₹96", img: maggie },
    { id: 3, name: "Oats Packet", price: "₹120", img: oats },
  ],

  "sweet-tooth": [
    { id: 1, name: "Chocolate Ice Cream", price: "₹80", img: dairymilk },
    { id: 2, name: "Gulab Jamun", price: "₹150", img: gulabjamun},
    { id: 3, name: "Rasgulla", price: "₹120", img: rasgulla },
  ],

  "bakery-&-biscuits": [
    { id: 1, name: "Oreo Biscuit", price: "₹30", img: oreo },
    { id: 2, name: "Parle G", price: "₹10", img: parleg},
    { id: 3, name: "Marie Gold", price: "₹25", img: mariegold },
  ],

  "tea,-coffee-&-health-drink": [
    { id: 1, name: "Tata Tea Gold", price: "₹220", img: tatatea },
    { id: 2, name: "Nescafe Coffee", price: "₹300", img: nescaffecoffe },
    { id: 3, name: "Bournvita", price: "₹250", img: bournvita },
  ],

  "atta,-rice-&-dal": [
    { id: 1, name: "Aashirvaad Atta 5kg", price: "₹300", img: aataaashirwaad },
    { id: 2, name: "Basmati Rice 5kg", price: "₹450", img: basmati },
    { id: 3, name: "Toor Dal 1kg", price: "₹150", img: arhardaal },
  ],

  "masala,-oil-&-more": [
    { id: 1, name: "Fortune Oil 1L", price: "₹150", img: oilfortune },
    { id: 2, name: "MDH Masala Pack", price: "₹70", img: mdhmasala },
    { id: 3, name: "Everest Chilli Powder", price: "₹90", img: laalmirch },
  ],

  "sauces-&-spreads": [
    { id: 1, name: "Ketchup", price: "₹85", img: saucekissan },
    { id: 2, name: "Mayonnaise", price: "₹120", img: myononise },
    { id: 3, name: "Jam Bottle", price: "₹95", img: jam },
  ],

  "chicken,-meat-&-fish": [
    { id: 1, name: "Chicken 1kg", price: "₹200", img: chickenonekg },
    { id: 2, name: "Fish 1kg", price: "₹300", img: fish },
    { id: 3, name: "Mutton 1kg", price: "₹700", img: mutton1kg },
  ],

  "organic-&-healthy-living": [
    { id: 1, name: "Organic Honey", price: "₹350", img: honeyshahed },
    { id: 2, name: "Organic Brown Rice", price: "₹500", img: brownriceorgnic },
  ],

  "baby-care": [
    { id: 1, name: "Diaper Pack", price: "₹600", img: diaper },
    { id: 2, name: "Baby Lotion", price: "₹250", img: baby_loation },
  ],

  "personal-care": [
    { id: 1, name: "Shampoo Bottle", price: "₹180", img: shampobottle },
    { id: 2, name: "Soap Pack", price: "₹120", img: dettol },
    { id: 3, name: "Toothpaste", price: "₹90", img: colgate },
  ],

  "cleaning-essentials": [
    { id: 1, name: "Surf Excel", price: "₹150", img: excelsurf },
    { id: 2, name: "Tide Powder", price: "₹140", img: tide },
    { id: 3, name: "Dettol", price: "₹120", img: dettol_sabun },
  ],

  "home-&-office": [
    { id: 1, name: "Fevi Stick", price: "₹20", img: stickfevi },
    { id: 2, name: "A4 Papers", price: "₹200", img: a_fourpaper },
  ],

  "pharma-&-wellness": [
    { id: 1, name: "Wallnut Scrub", price: "₹50", img: walnutscrub },
    { id: 2, name: "Goldenglow Face Mask", price: "₹40", img: goldenglow },
  ],

  "pet-care": [
    { id: 1, name: "Dog Food 1kg", price: "₹350", img: dogfood },
    { id: 2, name: "Cat Food 1kg", price: "₹300", img: catfood },
    { id: 3, name: "Pet Shampoo", price: "₹250", img: petshampoo },
  ],
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = productsData[categoryId];
  const { cartItems, addItemToCart, updateItemQuantity } = useCart();  // ✅ useCart hook

  return (
    <div className="category-page">
      <h2 className="category-title">
        {categoryId.replace(/-/g, " ").toUpperCase()}
      </h2>

      {products ? (
        <div className="products-grid">
          {products.map((item) => {
            const cartItem = cartItems.find(ci => ci.id === item.id); // check if item is already in cart

            return (
              <div key={item.id} className="product-card">
                <img src={item.img} alt={item.name} className="product-img" />
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">₹{item.price}</p>

                {cartItem ? (
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateItemQuantity(item.id, cartItem.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-display">{cartItem.quantity}</span>
                    <button 
                      onClick={() => updateItemQuantity(item.id, cartItem.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addItemToCart(item)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="not-found">Category not found</p>
      )}
    </div>
  );
};

export default CategoryPage;

// fully  updated  till now 
