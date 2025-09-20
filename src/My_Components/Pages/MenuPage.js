import React, { useState } from 'react';
import Footer from '../footer_Section/Footer';
import './pages.css';
import { useCart } from '../context/CartContext'; 

// Dummy data for grocery items
const groceryItems = [
  { id: 1, name: 'Fresh Apples (1kg)', price: 150, image: 'https://via.placeholder.com/300x200?text=Apples', category: 'Fruits' },
  { id: 2, name: 'Organic Milk (1L)', price: 60, image: 'https://via.placeholder.com/300x200?text=Milk', category: 'Dairy' },
  { id: 3, name: 'Basmati Rice (5kg)', price: 500, image: 'https://via.placeholder.com/300x200?text=Rice', category: 'Grains' },
  { id: 4, name: 'Onions (1kg)', price: 40, image: 'https://via.placeholder.com/300x200?text=Onions', category: 'Vegetables' },
  { id: 5, name: 'Cooking Oil (1L)', price: 120, image: 'https://via.placeholder.com/300x200?text=Oil', category: 'Staples' },
  { id: 6, name: 'Bread Loaf', price: 30, image: 'https://via.placeholder.com/300x200?text=Bread', category: 'Bakery' },
  { id: 7, name: 'Tomatoes (1kg)', price: 50, image: 'https://via.placeholder.com/300x200?text=Tomatoes', category: 'Vegetables' },
  { id: 8, name: 'Bananas (1 Dozen)', price: 80, image: 'https://via.placeholder.com/300x200?text=Bananas', category: 'Fruits' },
  { id: 9, name: 'Yogurt (500g)', price: 75, image: 'https://via.placeholder.com/300x200?text=Yogurt', category: 'Dairy' },
];

const allCategories = ['All', ...new Set(groceryItems.map(item => item.category))];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under ₹50', min: 0, max: 50 },
  { label: '₹50 - ₹100', min: 50, max: 100 },
  { label: '₹100 - ₹200', min: 100, max: 200 },
  { label: 'Above ₹200', min: 200, max: Infinity },
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState({ label: 'All', min: 0, max: Infinity });

  const { cartItems, addItemToCart, updateItemQuantity } = useCart();

  const filteredItems = groceryItems.filter(item => {
    const isCategoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const isPriceMatch = item.price >= selectedPriceRange.min && item.price <= selectedPriceRange.max;
    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div className="menu-page-container">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="menu-page-title">Explore Our Groceries</h1>
          <p className="menu-page-subtitle">Freshness delivered right to your doorstep, every day.</p>
        </div>

        <div className="row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="section-heading">Shop by Category</h2>
            <div className="category-list">
              {allCategories.map(category => (
                <span 
                  key={category} 
                  className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="section-heading">Filter by Price</h2>
            <div className="price-range-list">
              {priceRanges.map(range => (
                <span 
                  key={range.label} 
                  className={`price-range-pill ${selectedPriceRange.label === range.label ? 'active' : ''}`}
                  onClick={() => setSelectedPriceRange(range)}
                >
                  {range.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grocery Items Grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => {
              const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
              return (
                <div className="col" key={item.id}>
                  <div className="card h-100 product-card">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body d-flex flex-column">
                      <span className="product-category">{item.category}</span>
                      <h5 className="card-title mt-2">{item.name}</h5>
                      <p className="card-text product-price">₹{item.price}</p>
                      
                      {itemInCart ? (
                        <div className="quantity-controls mt-auto">
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateItemQuantity(item.id, itemInCart.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="quantity-display mx-2">{itemInCart.quantity}</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateItemQuantity(item.id, itemInCart.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button 
                          className="btn btn-warning mt-auto add-to-cart-btn"
                          onClick={() => addItemToCart(item)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center my-5">
              <p className="no-items-message">Sorry, no items found for the selected filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;