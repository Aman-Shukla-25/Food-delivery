import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer_Section/Footer';
import { useCart } from '../context/CartContext';
import './pages.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart(); // clearCart ko yahan access karein
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Form submit hone se rokein
    if (cartItems.length === 0) {
      alert("Aapka cart khali hai!");
      return;
    }
    // Simulate order placement
    console.log("Order placed:", cartItems);
    
    // Cart khali karein
    clearCart();

    // Success page par redirect karein
    navigate('/order-success');
  };

  return (
    <div className="checkout-page-container">
      <div className="container py-5">
        <h1 className="page-title text-center">Checkout</h1>
        <p className="page-description text-center">Please fill in your details to complete the order.</p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4">
              <h4 className="mb-4">Your Order ({totalItems} items)</h4>
              <ul className="list-group list-group-flush">
                {cartItems.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">{item.name}</span>
                      <small className="d-block text-muted">x {item.quantity}</small>
                    </div>
                    <span>₹{item.price * item.quantity}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </li>
              </ul>
              <form className="mt-4" onSubmit={handlePlaceOrder}> {/* onSubmit handler add karein */}
                <h4 className="mb-3">Delivery Information</h4>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea className="form-control" id="address" rows="3" required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" required />
                </div>
                
                <h4 className="mt-5 mb-3">Payment Method</h4>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="payment" id="cod" defaultChecked />
                  <label className="form-check-label" htmlFor="cod">Cash on Delivery (COD)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="payment" id="online" disabled />
                  <label className="form-check-label text-muted" htmlFor="online">Online Payment (Coming Soon)</label>
                </div>

                <button type="submit" className="btn btn-success btn-lg mt-4 w-100">Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;