import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo_first.png';
import SearchBar from './search_Bar';

const Header = () => {
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
              <a href="/" className="nav-link active">Home</a>
              <a href="/menu" className="nav-link">Menu</a>
              <a href="/login" className="nav-link">Login</a>
              <a href="/cart" className="nav-link">Cart</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

