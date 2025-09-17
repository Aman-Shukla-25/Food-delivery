import React from 'react';
import './Promotional_Banners.css';

// --- Sample Banners ka data ---
import bannerOne from '../../assets/images/offer_one.jpg';
import bannerTwo from '../../assets/images/offer_two.jpg';
import bannerThree from '../../assets/images/offer_three.jpg';

const banners = [
    {
        id: 1,
        imageUrl: bannerOne,
        link: "#",
        altText: "New User Discount"
    },
    {
        id: 2,
        imageUrl: bannerTwo,
        link: "#",
        altText: "Weekend Sale"
    },
    {
        id: 3,
        imageUrl: bannerThree,
        link: "#",
        altText: "Free Delivery Offer"
    },
];

const PromotionalBanners = () => {
    return (
        <section className="promotional-banners-container">
            <div className="banners-grid">
                {banners.map((banner) => (
                    <a 
                        href={banner.link} 
                        key={banner.id} 
                        className="banner-card"
                    >
                        <img 
                            src={banner.imageUrl} 
                            alt={banner.altText} 
                            className="banner-image" 
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default PromotionalBanners;