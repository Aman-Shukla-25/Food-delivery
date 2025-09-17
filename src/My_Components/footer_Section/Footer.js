import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>
                        We are committed to providing the best quality grocery products right to your doorstep. Our mission is to make healthy and delicious food accessible to everyone.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Connect with Us</h4>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i>Facebook</a>
                        <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                        <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
                        <a href="#"><i className="fab fa-linkedin-in"></i>LinkedIn</a>
                    </div>
                    <p className="contact-info">
                        Email: info@mysite.com<br />
                        Phone: +91 9876543210
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 My Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;