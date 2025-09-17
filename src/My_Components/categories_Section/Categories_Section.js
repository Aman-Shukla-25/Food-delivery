import React from 'react';
import './Categories_Section.css';

// --- Category Images ko import karein ---
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

// --- Images aur names ka array ---
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

const CategoriesSection = () => {
    return (
        <section className="categories-section-container">
            <h2 className="section-title">Explore by Category</h2>
            <div className="categories-grid">
                {imageCategories.map((item, index) => (
                    <div key={index} className="category-card">
                        <img 
                            src={item.imgUrl} 
                            alt={item.name} 
                            className="category-image" 
                        />
                        <div className="category-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;