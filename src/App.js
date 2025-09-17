import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './My_Components/header/header';
import NavBarTwo from './My_Components/header/navBar_two';
import ImageSlider from './My_Components/slider_Section/Image_Slider';
import CategoriesSection from './My_Components/categories_Section/Categories_Section';
import PromotionalBanners from './My_Components/promotional_Banners/Promotional_Banners';
import DailyOffers from './My_Components/daily_Offers/Daily_Offers';
import FoodAnimation from "./My_Components/FoodAnimation/FoodAnimation";
import Footer from './My_Components/footer_Section/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 return (
 <Router>
 <Header />
<NavBarTwo />
<ImageSlider />
 <CategoriesSection />
 <PromotionalBanners />
 <DailyOffers />
 <FoodAnimation />
 <Footer />
 </Router>
 );
}

export default App;
