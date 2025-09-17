// src/My_Components/Daily_Offers/Daily_Offers.js

import React from 'react';
import './Daily_Offers.css';

// ...baaki imports wahi rahenge...
import productOne from '../../assets/images/offer_one.jpg';
import productTwo from '../../assets/images/offer_two.jpg';
import productThree from '../../assets/images/offer_three.jpg';
import productFour from '../../assets/images/offer_four.jpg';
import productFive from '../../assets/images/offer_five.jpg';
import productSix from '../../assets/images/offer_six.jpg';

const dailyOffers = [
    {
        id: 1,
        name: 'Organic Fresh Apples (1kg)',
        imageUrl: productOne,
        originalPrice: 150,
        discountedPrice: 120,
    },
    {
        id: 2,
        name: 'Whole Wheat Bread (400g)',
        imageUrl: productTwo,
        originalPrice: 50,
        discountedPrice: 45,
    },
    {
        id: 3,
        name: 'Milk Chocolate Bar (100g)',
        imageUrl: productThree,
        originalPrice: 80,
        discountedPrice: 65,
    },
    {
        id: 4,
        name: 'Bourn mita (250g)',
        imageUrl: productFour,
        originalPrice: 120,
        discountedPrice: 99,
    },
    {
        id: 5,
        name: 'Rolex watch',
        imageUrl: productFive,
        originalPrice: 150,
        discountedPrice: 99,
    },
    {
        id: 6,
        name: 'Premium Tea Leaves (250g)',
        imageUrl: productSix,
        originalPrice: 120,
        discountedPrice: 89,
    },
];

// Ab component ek naya prop 'onAddToCart' lega
const DailyOffers = ({ onAddToCart }) => {
    return (
        <section className="daily-offers-container">
            <h2 className="section-title">Deals of the Day</h2>
            <div className="offers-grid">
                {dailyOffers.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="product-image" 
                            />
                        </div>
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-price">
                                <span className="discounted-price">₹{product.discountedPrice}</span>
                                <span className="original-price">₹{product.originalPrice}</span>
                            </div>
                            {/* onClick event mein prop function ko call kiya */}
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => onAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DailyOffers;