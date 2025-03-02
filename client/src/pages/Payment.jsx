import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { cartItems, total, discount } = location.state || {};  // Ensure cart data is passed here

  const [paymentTotal, setPaymentTotal] = useState(0);

  useEffect(() => {
    if (cartItems && total !== undefined) {
      const finalTotal = (parseFloat(total) - discount).toFixed(2);
      setPaymentTotal(finalTotal);
    }
  }, [cartItems, total, discount]);

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Complete Your Purchase</h2>
      <p className="payment-subheading">Securely complete your purchase with the details below.</p>

      {cartItems && cartItems.length > 0 ? (
        <>
          <div className="order-summary">
            <h3 className="order-summary-heading">Order Summary</h3>
            <ul className="order-items">
              {cartItems.map((item, index) => (
                <li key={index} className="order-item">
                  <span>{item.name}</span> 
                  <span>Size: {item.size}</span> 
                  <span>Color: {item.color}</span> 
                  <span>Quantity: {item.quantity}</span> 
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="total-summary">
              <div>
                <span>Total:</span> <span>${total}</span>
              </div>
              <div>
                <span>Discount:</span> <span>-${discount}</span>
              </div>
              <div className="final-total">
                <span>Final Total:</span> <span>${paymentTotal}</span>
              </div>
            </div>
          </div>

          <div className="payment-details">
            <h3 className="payment-details-heading">Enter Payment Details</h3>
            <div className="payment-form">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" />
              
              <label>Cardholder Name</label>
              <input type="text" placeholder="John Doe" />
              
              <div className="payment-date">
                <div>
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>

              <div className="payment-submit">
                <button className="pay-button">Pay ${paymentTotal}</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>No items in the cart.</div>
      )}
    </div>
  );
};

export default Payment;