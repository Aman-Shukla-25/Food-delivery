import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Deals.css';

import dealImage1 from '../../assets/images/fries.png';
import dealImage2 from '../../assets/images/burger.png';
import dealImage3 from '../../assets/images/coffe.png';
import dealImage4 from '../../assets/images/corn_Flakes.avif';
import dealImage5 from '../../assets/images/ice_Cream.avif';
import dealImage6 from '../../assets/images/tea_Coffe.avif';
import dealImage7 from '../../assets/images/offer_three.jpg';
import dealImage8 from '../../assets/images/offer_one.jpg';
import dealImage9 from '../../assets/images/iceecream.png';
import dealImage10 from '../../assets/images/personal_Saman.avif';

const deals = [
  {
    id: 1,
    title: '50% off on all Dairy Products',
    description: 'Get fresh milk, cheese, and yogurt at half price.',
    image: dealImage1,
    category: 'dairy',
    link: '/categories/milks-and-dairies'
  },
  {
    id: 2,
    title: 'Buy 1 Get 1 on Fresh Fruits',
    description: 'Enjoy juicy apples, bananas, and oranges.',
    image: dealImage2,
    category: 'fruits',
    link: '/categories/fresh-fruit'
  },
  {
    id: 3,
    title: 'Flat 30% off on Snacks',
    description: 'Snack time just got better with our amazing deals on chips and biscuits.',
    image: dealImage3,
    category: 'snacks',
    link: '/categories/snacks-and-munchies'
  },
  {
    id: 4,
    title: 'Up to 40% off on Breakfast Items',
    description: 'Start your day right with discounts on corn flakes and oats.',
    image: dealImage4,
    category: 'breakfast',
    link: '/categories/breakfast-and-instant-food'
  },
  {
    id: 5,
    title: 'Mega Savings on Home Essentials',
    description: 'Stock up on cleaning supplies and other home goods.',
    image: dealImage5,
    category: 'home',
    link: '/categories/cleaning-essentials'
  },
  {
    id: 6,
    title: 'Special Offer on Cold Drinks',
    description: 'Stay refreshed with great deals on cold drinks and juices.',
    image: dealImage6,
    category: 'drinks',
    link: '/categories/cold-drinks-and-juices'
  },
  {
    id: 7,
    title: '25% off on Personal Care',
    description: 'Pamper yourself with discounts on shampoos, soaps, and more.',
    image: dealImage7,
    category: 'personal-care',
    link: '/categories/personal-care'
  },
  {
    id: 8,
    title: 'Exclusive Deals on Baby Care',
    description: 'Everything you need for your baby at unbeatable prices.',
    image: dealImage8,
    category: 'baby-care',
    link: '/categories/baby-care'
  },
  {
    id: 9,
    title: 'Groceries Combo Pack',
    description: 'Save big with our special grocery combo packs.',
    image: dealImage9,
    category: 'groceries',
    link: '/categories/groceries'
  },
  {
    id: 10,
    title: 'Best Price on Tea & Coffee',
    description: 'Sip on your favorite brew without breaking the bank.',
    image: dealImage10,
    category: 'tea-coffee',
    link: '/categories/tea-coffee-and-health-drink'
  },
];

const Deals = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDeals = activeFilter === 'all'
    ? deals
    : deals.filter(deal => deal.category === activeFilter);

  return (
    <div className="deals-page">
      <div className="deals-header">
        <h1>Today's Best Deals</h1>
        <p>Don't miss out on these limited-time offers!</p>
      </div>

      <div className="deals-filters">
        <button
          className={activeFilter === 'all' ? 'active' : ''}
          onClick={() => setActiveFilter('all')}
        >
          All Deals
        </button>
        <button
          className={activeFilter === 'fruits' ? 'active' : ''}
          onClick={() => setActiveFilter('fruits')}
        >
          Fruits
        </button>
        <button
          className={activeFilter === 'dairy' ? 'active' : ''}
          onClick={() => setActiveFilter('dairy')}
        >
          Dairy
        </button>
        <button
          className={activeFilter === 'snacks' ? 'active' : ''}
          onClick={() => setActiveFilter('snacks')}
        >
          Snacks
        </button>
        <button
          className={activeFilter === 'breakfast' ? 'active' : ''}
          onClick={() => setActiveFilter('breakfast')}
        >
          Breakfast
        </button>
        <button
          className={activeFilter === 'home' ? 'active' : ''}
          onClick={() => setActiveFilter('home')}
        >
          Home Essentials
        </button>
      </div>

      <div className="deals-grid">
        {filteredDeals.map(deal => (
          <div key={deal.id} className="deal-card">
            <Link to={deal.link}>
              <div className="deal-image-container">
                <img src={deal.image} alt={deal.title} className="deal-image" />
                <div className="deal-badge">HOT DEAL!</div>
              </div>
              <div className="deal-info">
                <h3 className="deal-title">{deal.title}</h3>
                <p className="deal-description">{deal.description}</p>
                <div className="deal-button">Shop Now</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;