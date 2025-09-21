import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Firebase modules ko import karein
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// CartProvider aur saare page components ko import karein
import { CartProvider } from './My_Components/context/CartContext';
import Header from './My_Components/header/header';
import MenuPage from './My_Components/Pages/MenuPage';
import LoginPage from './My_Components/Pages/LoginPage';
import CartPage from './My_Components/Pages/CartPage';
import CheckoutPage from './My_Components/Pages/CheckoutPage';
import OrderSuccessPage from './My_Components/Pages/OrderSuccessPage';
import Deals from './My_Components/Pages/Deals'; 
import CategoryPage from './My_Components/Pages/CategoryPage'; 

// Doosre components
import NavBarTwo from './My_Components/header/navBar_two';
import ImageSlider from './My_Components/slider_Section/Image_Slider';
import CategoriesSection from './My_Components/categories_Section/Categories_Section';
import PromotionalBanners from './My_Components/promotional_Banners/Promotional_Banners';
import DailyOffers from './My_Components/daily_Offers/Daily_Offers';
import FoodAnimation from "./My_Components/FoodAnimation/FoodAnimation";
import Footer from './My_Components/footer_Section/Footer';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA3-7xi5SOnnZktHSUEYzN6naVntuw2V9Y",
  authDomain: "meri-grocery-website.firebaseapp.com",
  projectId: "meri-grocery-website",
  storageBucket: "meri-grocery-website.firebasestorage.app",
  messagingSenderId: "628827732373",
  appId: "1:628827732373:web:6010e1c536a8b7cab21e9c",
  measurementId: "G-NELW6BQKXQ"
};

// Firebase initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export { auth };

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          {/* ✅ Home page */}
          <Route 
            path="/" 
            element={
              <>
                <NavBarTwo />
                <ImageSlider />
                <CategoriesSection />
                <PromotionalBanners />
                <DailyOffers />
                <FoodAnimation />
                <Footer />
              </>
            } 
          />

          {/* ✅ Deals page */}
          <Route path="/deals" element={<Deals />} /> 

          {/* ✅ Dynamic category pages */}
          <Route path="/categories/:categoryId" element={<CategoryPage />} />

          {/* ✅ Other pages */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

