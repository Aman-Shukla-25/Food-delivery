// src/My_Components/Pages/OrderSuccessPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer_Section/Footer';
import './pages.css';

const OrderSuccessPage = () => {
  return (
    <div className="page-container d-flex justify-content-center align-items-center text-center">
      <div className="container my-5">
        <div className="card p-5 shadow-lg">
          <div className="success-icon mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#28a745" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.53a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div>
          <h1 className="success-title">Order Placed Successfully!</h1>
          <p className="success-message">Thank you for your order. We've received it and will start processing it shortly.</p>
          <Link to="/" className="btn btn-primary mt-4">Go to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccessPage;