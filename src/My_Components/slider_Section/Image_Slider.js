import React, { useState, useEffect } from 'react';
import './Image_Slider.css';

// --- Images ko sahi path se import karein ---
import offerOneImage from '../../assets/images/offer_one.jpg';
import offerTwoImage from '../../assets/images/offer_two.jpg';
import offerThreeImage from '../../assets/images/offer_three.jpg';
import offerFourImage from '../../assets/images/offer_four.jpg';
import offerFiveImage from '../../assets/images/offer_five.jpg';
import offerSixImage from '../../assets/images/offer_six.jpg';


const images = [
    offerOneImage,
    offerTwoImage,
    offerThreeImage,
    offerFourImage,
    offerFiveImage,
    offerSixImage,
];

const ImageSlider = () => {
    // Current image ko track karne ke liye state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Total images ki sankhya
    const totalImages = images.length;

    // Automatic sliding ke liye useEffect hook ka istemal
    useEffect(() => {
        const timer = setInterval(() => {
            // Next image par jane ke liye
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 5000); // Har 5 seconds mein slide badlega
        
        // Component unmount hone par timer ko clear karein
        return () => clearInterval(timer);
    }, [totalImages]); // Dependency array mein totalImages ko rakhein

    // Previous button ka handler
    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    // Next button ka handler
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % totalImages
        );
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <img 
                    src={images[currentImageIndex]} 
                    alt="Offer Banner" 
                    className="slider-image" 
                />
            </div>

            {/* Navigation Buttons */}
            <button className="slider-btn prev-btn" onClick={handlePrev}>
                &lt;
            </button>
            <button className="slider-btn next-btn" onClick={handleNext}>
                &gt;
            </button>

            {/* Navigation Dots */}
            <div className="slider-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;