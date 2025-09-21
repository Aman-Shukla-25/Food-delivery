import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import "./CategoryPage.css"; 

// --- Products data ---
const productsData = {
  "paan-corner": [
    { id: 1, name: "Banarasi Paan", price: 30, img: "https://via.placeholder.com/150?text=Banarasi+Paan" },
    { id: 2, name: "Calcutta Meetha Paan", price: 40, img: "https://via.placeholder.com/150?text=Meetha+Paan" },
  ],
  "dairy,-bread-&-eggs": [
    { id: 1, name: "Amul Milk 1L", price: 60, img: "https://via.placeholder.com/150?text=Amul+Milk" },
    { id: 2, name: "Brown Bread", price: 35, img: "https://via.placeholder.com/150?text=Brown+Bread" },
    { id: 3, name: "Farm Eggs 6pc", price: 70, img: "https://via.placeholder.com/150?text=Eggs" },
  ],

  "fruits-&-vegetables": [
    { id: 1, name: "Apple (1kg)", price: 150, img: "https://via.placeholder.com/150?text=Apple" },
    { id: 2, name: "Banana (1 dozen)", price: 60, img: "https://via.placeholder.com/150?text=Banana" },
    { id: 3, name: "Tomato (1kg)", price: 40, img: "https://via.placeholder.com/150?text=Tomato" },
  ],

  "cold-drinks-&-juices": [
    { id: 1, name: "Pepsi 1L", price: 60, img: "https://via.placeholder.com/150?text=Pepsi" },
    { id: 2, name: "Coca-Cola 1L", price: 65, img: "https://via.placeholder.com/150?text=Coca-Cola" },
    { id: 3, name: "Thums Up 750ml", price: 55, img: "https://via.placeholder.com/150?text=Thums-Up" },
    { id: 4, name: "Tropicana Juice", price: 120, img: "https://via.placeholder.com/150?text=Tropicana" },
    { id: 5, name: "Real Juice", price: 110, img: "https://via.placeholder.com/150?text=Real" },
  ],

  "snacks-&-munchies": [
    { id: 1, name: "Lays Chips", price: "₹20", img: "https://via.placeholder.com/150?text=Lays" },
    { id: 2, name: "Kurkure", price: "₹10", img: "https://via.placeholder.com/150?text=Kurkure" },
    { id: 3, name: "Bingo Chips", price: "₹25", img: "https://via.placeholder.com/150?text=Bingo" },
  ],

  "breakfast-&-instant-food": [
    { id: 1, name: "Corn Flakes", price: "₹180", img: "https://via.placeholder.com/150?text=Corn+Flakes" },
    { id: 2, name: "Maggi 8 Pack", price: "₹96", img: "https://via.placeholder.com/150?text=Maggi" },
    { id: 3, name: "Oats Packet", price: "₹120", img: "https://via.placeholder.com/150?text=Oats" },
  ],

  "sweet-tooth": [
    { id: 1, name: "Chocolate Ice Cream", price: "₹80", img: "https://via.placeholder.com/150?text=Ice+Cream" },
    { id: 2, name: "Gulab Jamun", price: "₹150", img: "https://via.placeholder.com/150?text=Gulab+Jamun" },
    { id: 3, name: "Rasgulla", price: "₹120", img: "https://via.placeholder.com/150?text=Rasgulla" },
  ],

  "bakery-&-biscuits": [
    { id: 1, name: "Oreo Biscuit", price: "₹30", img: "https://via.placeholder.com/150?text=Oreo" },
    { id: 2, name: "Parle G", price: "₹10", img: "https://via.placeholder.com/150?text=Parle+G" },
    { id: 3, name: "Marie Gold", price: "₹25", img: "https://via.placeholder.com/150?text=Marie+Gold" },
  ],

  "tea,-coffee-&-health-drink": [
    { id: 1, name: "Tata Tea Gold", price: "₹220", img: "https://via.placeholder.com/150?text=Tata+Tea" },
    { id: 2, name: "Nescafe Coffee", price: "₹300", img: "https://via.placeholder.com/150?text=Nescafe" },
    { id: 3, name: "Bournvita", price: "₹250", img: "https://via.placeholder.com/150?text=Bournvita" },
  ],

  "atta,-rice-&-dal": [
    { id: 1, name: "Aashirvaad Atta 5kg", price: "₹300", img: "https://via.placeholder.com/150?text=Atta" },
    { id: 2, name: "Basmati Rice 5kg", price: "₹450", img: "https://via.placeholder.com/150?text=Rice" },
    { id: 3, name: "Toor Dal 1kg", price: "₹150", img: "https://via.placeholder.com/150?text=Dal" },
  ],

  "masala,-oil-&-more": [
    { id: 1, name: "Fortune Oil 1L", price: "₹150", img: "https://via.placeholder.com/150?text=Oil" },
    { id: 2, name: "MDH Masala Pack", price: "₹70", img: "https://via.placeholder.com/150?text=Masala" },
    { id: 3, name: "Everest Chilli Powder", price: "₹90", img: "https://via.placeholder.com/150?text=Chilli+Powder" },
  ],

  "sauces-&-spreads": [
    { id: 1, name: "Ketchup", price: "₹85", img: "https://via.placeholder.com/150?text=Ketchup" },
    { id: 2, name: "Mayonnaise", price: "₹120", img: "https://via.placeholder.com/150?text=Mayonnaise" },
    { id: 3, name: "Jam Bottle", price: "₹95", img: "https://via.placeholder.com/150?text=Jam" },
  ],

  "chicken,-meat-&-fish": [
    { id: 1, name: "Chicken 1kg", price: "₹200", img: "https://via.placeholder.com/150?text=Chicken" },
    { id: 2, name: "Fish 1kg", price: "₹300", img: "https://via.placeholder.com/150?text=Fish" },
    { id: 3, name: "Mutton 1kg", price: "₹700", img: "https://via.placeholder.com/150?text=Mutton" },
  ],

  "organic-&-healthy-living": [
    { id: 1, name: "Organic Honey", price: "₹350", img: "https://via.placeholder.com/150?text=Honey" },
    { id: 2, name: "Organic Brown Rice", price: "₹500", img: "https://via.placeholder.com/150?text=Brown+Rice" },
  ],

  "baby-care": [
    { id: 1, name: "Diaper Pack", price: "₹600", img: "https://via.placeholder.com/150?text=Diaper" },
    { id: 2, name: "Baby Lotion", price: "₹250", img: "https://via.placeholder.com/150?text=Baby+Lotion" },
  ],

  "personal-care": [
    { id: 1, name: "Shampoo Bottle", price: "₹180", img: "https://via.placeholder.com/150?text=Shampoo" },
    { id: 2, name: "Soap Pack", price: "₹120", img: "https://via.placeholder.com/150?text=Soap" },
    { id: 3, name: "Toothpaste", price: "₹90", img: "https://via.placeholder.com/150?text=Toothpaste" },
  ],

  "cleaning-essentials": [
    { id: 1, name: "Surf Excel", price: "₹150", img: "https://via.placeholder.com/150?text=Surf+Excel" },
    { id: 2, name: "Tide Powder", price: "₹140", img: "https://via.placeholder.com/150?text=Tide" },
    { id: 3, name: "Dettol", price: "₹120", img: "https://via.placeholder.com/150?text=Dettol" },
  ],

  "home-&-office": [
    { id: 1, name: "Fevi Stick", price: "₹20", img: "https://via.placeholder.com/150?text=FeviStick" },
    { id: 2, name: "A4 Papers", price: "₹200", img: "https://via.placeholder.com/150?text=Papers" },
  ],

  "pharma-&-wellness": [
    { id: 1, name: "Paracetamol", price: "₹50", img: "https://via.placeholder.com/150?text=Medicine" },
    { id: 2, name: "Vicks", price: "₹40", img: "https://via.placeholder.com/150?text=Vicks" },
  ],

  "pet-care": [
    { id: 1, name: "Dog Food 1kg", price: "₹350", img: "https://via.placeholder.com/150?text=Dog+Food" },
    { id: 2, name: "Cat Food 1kg", price: "₹300", img: "https://via.placeholder.com/150?text=Cat+Food" },
    { id: 3, name: "Pet Shampoo", price: "₹250", img: "https://via.placeholder.com/150?text=Pet+Shampoo" },
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
