import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar_two.css';
import logoImage from '../../assets/images/logo_first.png';
import deliveryIcon from '../../assets/images/deliveryIcon.png'; 

import paanCornerImage from '../../assets/images/paan_Corner.avif';
import dairyBreadImage from '../../assets/images/dairy_Bread.avif'; 
import fruitsVegImage from '../../assets/images/fruits_Vegitables.avif'; 
import coldDrinkImage from '../../assets/images/cold_Drink.avif'; 
import laysChipsImage from '../../assets/images/lays_Chips.avif'; 
import cornFlakesImage from '../../assets/images/corn_Flakes.avif'; 
import iceCreamImage from '../../assets/images/ice_Cream.avif'; 
import oreoBiscuitImage from '../../assets/images/oreo_Biscuit.avif'; 
import teaCoffeeImage from '../../assets/images/tea_Coffe.avif'; 
import attaDalChawalImage from '../../assets/images/aatadal_Chawal.avif'; 
import fortuneRefindImage from '../../assets/images/fortune_Refind.avif'; 
import sauceTomatoImage from '../../assets/images/sauce_Tomato.avif'; 
import chickenFishImage from '../../assets/images/chicken_Fish.avif'; 
import organicProductImage from '../../assets/images/organic_Product.avif'; 
import manypocoPantsImage from '../../assets/images/manypoco_Pants.avif'; 
import personalSamanImage from '../../assets/images/personal_Saman.avif'; 
import surfexcelTideImage from '../../assets/images/surfexcel_Tide.avif'; 
import feviStickImage from '../../assets/images/fevi_Stick.avif'; 
import shampooSoapImage from '../../assets/images/shampoo_Soap.avif'; 
import petCareImage from '../../assets/images/pet_Care.avif'; 

const twoColumnCategories = [
    { name: 'Milks and Dairies', icon: <i className="fa-solid fa-cheese"></i> },
    { name: 'Electronics', icon: <i className="fa-solid fa-mobile-alt"></i> },
    { name: 'Clothing & beauty', icon: <i className="fa-solid fa-shirt"></i> },
    { name: 'Baby Products', icon: <i className="fa-solid fa-bottle-droplet"></i> },
    { name: 'Pet Foods & Toy', icon: <i className="fa-solid fa-bone"></i> },
    { name: 'Fast food', icon: <i className="fa-solid fa-burger"></i> },
    { name: 'Groceries', icon: <i className="fa-solid fa-cart-shopping"></i> },
    { name: 'Vegetables', icon: <i className="fa-solid fa-carrot"></i> },
    { name: 'Fresh Fruit', icon: <i className="fa-solid fa-apple-whole"></i> },
    { name: 'Bread and Juice', icon: <i className="fa-solid fa-basket-shopping"></i> },
];

const imageCategories = [
    { name: 'Paan Corner', imgUrl: paanCornerImage },
    { name: 'Dairy, Bread & Eggs', imgUrl: dairyBreadImage },
    { name: 'Fruits & Vegetables', imgUrl: fruitsVegImage },
    { name: 'Cold Drinks & Juices', imgUrl: coldDrinkImage },
    { name: 'Snacks & Munchies', imgUrl: laysChipsImage },
    { name: 'Breakfast & Instant Food', imgUrl: cornFlakesImage },
    { name: 'Sweet Tooth', imgUrl: iceCreamImage },
    { name: 'Bakery & Biscuits', imgUrl: oreoBiscuitImage },
    { name: 'Tea, Coffee & Health Drink', imgUrl: teaCoffeeImage },
    { name: 'Atta, Rice & Dal', imgUrl: attaDalChawalImage },
    { name: 'Masala, Oil & More', imgUrl: fortuneRefindImage },
    { name: 'Sauces & Spreads', imgUrl: sauceTomatoImage },
    { name: 'Chicken, Meat & Fish', imgUrl: chickenFishImage },
    { name: 'Organic & Healthy Living', imgUrl: organicProductImage },
    { name: 'Baby Care', imgUrl: manypocoPantsImage },
    { name: 'Personal Care', imgUrl: personalSamanImage },
    { name: 'Cleaning Essentials', imgUrl: surfexcelTideImage },
    { name: 'Home & Office', imgUrl: feviStickImage },
    { name: 'Pharma & Wellness', imgUrl: shampooSoapImage },
    { name: 'Pet Care', imgUrl: petCareImage },
];

const NavBarTwo = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleClick = (menuName) => {
        if (openDropdown === menuName) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(menuName);
        }
    };

    return (
        <nav className="main-nav">
            <div className="left-section">
                <div className="categories-dropdown-container">
                    <button
                        className="categories-btn"
                        onClick={() => handleClick('categories')}
                        aria-expanded={openDropdown === 'categories'}
                        aria-controls="categories-menu"
                    >
                        <i className="fa-solid fa-th-large icon"></i>
                        <span>Browse All Categories</span>
                        <i className={`fa-solid fa-chevron-${openDropdown === 'categories' ? 'up' : 'down'} arrow`}></i>
                    </button>

                    {openDropdown === 'categories' && (
                        <div id="categories-menu" className="two-col-menu official-look">
                            <div className="two-col-grid">
                                {twoColumnCategories.map((cat, index) => (
                                    <Link key={index} to={`/categories/${cat.name.replace(/ /g, '-').toLowerCase()}`} className="category-item">
                                        <span className="item-icon">{cat.icon}</span>
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <ul className="nav-links">
                    <li><Link to="/deals">Deals</Link></li>
                    
                    <li>
                        <Link
                            to="/mega-menu"
                            className="has-dropdown"
                            onClick={(e) => { e.preventDefault(); handleClick('megaMenu'); }}
                            aria-expanded={openDropdown === 'megaMenu'}
                            aria-controls="mega-menu-content"
                        >
                            Mega menu
                            <i className={`fa-solid fa-chevron-${openDropdown === 'megaMenu' ? 'up' : 'down'} dropdown-arrow`}></i>
                        </Link>
                        {openDropdown === 'megaMenu' && (
                            <div id="mega-menu-content" className="mega-menu image-grid-menu">
                                <div className="image-grid-container">
                                    {imageCategories.map((item, index) => (
                                        <Link key={index} to={`/categories/${item.name.replace(/ /g, '-').toLowerCase()}`} className="image-grid-item">
                                            <img src={item.imgUrl} alt={item.name} />
                                            <div className="item-text">{item.name}</div>
                                        </Link>
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
                <img src={deliveryIcon} alt="Delivery Rider Icon" className="animated-logo" />
            </div>
        </nav>
    );
};

export default NavBarTwo;