import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../context/CartContext'; 
import './pages.css';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateItemQuantity, removeItemFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="page-container">
      <div className="container my-5">
        <h1 className="page-title">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="row">
            <div className="col-lg-8">
              {cartItems.map(item => (
                <div key={item.id} className="card mb-3 p-3 cart-item-card">
                  <div className="row align-items-center">
                    <div className="col-3 col-sm-2">
                      <img src={item.image} className="img-fluid rounded" alt={item.name} />
                    </div>
                    <div className="col-9 col-sm-5">
                      <h5 className="item-name">{item.name}</h5>
                      <p className="text-muted mb-0">₹{item.price}</p>
                    </div>
                    <div className="col-6 col-sm-3 mt-3 mt-sm-0">
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="mx-2 quantity-display">{item.quantity}</span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-6 col-sm-2 text-end mt-3 mt-sm-0">
                      <p className="fw-bold mb-0">₹{item.price * item.quantity}</p>
                      <button 
                        className="btn btn-sm btn-link text-danger remove-item-btn"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="card p-4 checkout-summary">
                <h4>Order Summary</h4>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>₹{subtotal}</span>
                </div>
                <button 
                  className="btn btn-success mt-3 w-100"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center my-5 empty-cart-message">
            <p> Cart is empty.</p>
            <a href="/menu" className="btn btn-primary mt-3">SHOP NOW</a>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default CartPage;
