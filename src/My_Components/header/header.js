import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../assets/images/logo_first.png';
import SearchBar from './search_Bar';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../App';

const Header = () => {
  const { cartItems } = useCart(); 
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); 

  useEffect(() => {
    // onAuthStateChanged user ke login/logout hone par chalta hai
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // Cleanup function
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      navigate('/login');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header className="main-header">
      <div className="container-fluid">
        <div className="row align-items-center">

          {/* Logo + tagline */}
          <div className="col-sm-2 d-flex flex-column align-items-start">
            <img src={Logo} alt="Website Logo" className="img-fluid logo" />
            <span className="tagline">24/7 available for your need</span>
          </div>

          {/* Search Bar */}
          <div className="col-sm-5 d-flex justify-content-center">
            <SearchBar />
          </div>

          {/* Navigation Menu */}
          <div className="col-sm-5 d-flex justify-content-end">
            <nav className="main-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/menu" className="nav-link">Menu</Link>
              {user ? (
                // Agar user login hai, to Logout button dikhega
                <button onClick={handleLogout} className="nav-link btn btn-link">
                  Logout
                </button>
              ) : (
                // Agar user login nahi hai, to Login link dikhega
                <Link to="/login" className="nav-link">Login</Link>
              )}
              <Link to="/cart" className="nav-link cart-link">
                Cart
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



