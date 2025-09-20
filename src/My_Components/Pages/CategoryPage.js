// src/My_Components/Pages/CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Cart context ko import karein
import './CategoryPage.css';

// Fake products ka data (yahan humne ek sample data banaya hai)
// Aap is data ko future mein Firebase Firestore se fetch kar sakte hain
const allProducts = {
    'milks-and-dairies': [
        { id: '1a', name: 'Amul Milk', price: 60, image: 'https://via.placeholder.com/250/007bff/ffffff?text=Amul+Milk' },
        { id: '1b', name: 'Nestle Yogurt', price: 45, image: 'https://via.placeholder.com/250/ff4d4f/ffffff?text=Nestle+Yogurt' },
        { id: '1c', name: 'Ghee Packet', price: 350, image: 'https://via.placeholder.com/250/28a745/ffffff?text=Ghee' },
    ],
    'fresh-fruit': [
        { id: '2a', name: 'Fresh Apples', price: 120, image: 'https://via.placeholder.com/250/6c757d/ffffff?text=Apples' },
        { id: '2b', name: 'Bananas', price: 40, image: 'https://via.placeholder.com/250/ffc107/ffffff?text=Bananas' },
        { id: '2c', name: 'Oranges', price: 90, image: 'https://via.placeholder.com/250/17a2b8/ffffff?text=Oranges' },
    ],
    'snacks-and-munchies': [
        { id: '3a', name: 'Lays Chips', price: 20, image: 'https://via.placeholder.com/250/dc3545/ffffff?text=Lays' },
        { id: '3b', name: 'Oreo Biscuits', price: 35, image: 'https://via.placeholder.com/250/6610f2/ffffff?text=Oreo' },
    ],
    'breakfast-and-instant-food': [
        { id: '4a', name: 'Kelloggs Corn Flakes', price: 180, image: 'https://via.placeholder.com/250/fd7e14/ffffff?text=Corn+Flakes' },
        { id: '4b', name: 'Maggie Noodles', price: 15, image: 'https://via.placeholder.com/250/e83e8c/ffffff?text=Maggie' },
    ],
    // Baaki categories ka data...
};

const CategoryPage = () => {
    const { categoryId } = useParams();
    const { addItemToCart } = useCart(); // useCart hook se addItemToCart function lein

    const products = allProducts[categoryId];

    if (!products) {
        return <div className="text-center my-5">Category not found! Please check the URL.</div>;
    }

    // Category name ko user-friendly banayein
    const pageTitle = categoryId.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="category-page">
            <h1 className="page-title">{pageTitle}</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">₹{product.price}</p>
                            <button
                                className="btn btn-primary add-to-cart-btn"
                                onClick={() => addItemToCart(product)} // addItemToCart function ko call karein
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;