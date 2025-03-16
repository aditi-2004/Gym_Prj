// import React, { useState, useEffect } from 'react'; // Added useEffect for debugging
// import { useLocation, Link } from 'react-router-dom';
// import './PaymentConfirmation.css';

// const PaymentConfirmation = () => {
//   const location = useLocation();
  
//   // Debug location.state to identify issues
//   useEffect(() => {
//     console.log('Location state:', location.state);
//   }, [location.state]);

//   const { 
//     cartItems = [], 
//     billingAddress = {}, 
//     shippingAddress = {}, 
//     shippingMethod = 'standard', 
//     discount = 0 
//   } = location.state || {}; // Default values to handle missing state

//   const [orderNumber] = useState(Math.floor(10000 + Math.random() * 90000)); // Generate a random order number

//   // Ensure customer name is correctly formatted as "First Name Last Name"
//   const customerName = billingAddress.firstName && billingAddress.lastName 
//     ? `${billingAddress.firstName.trim()} ${billingAddress.lastName.trim()}` 
//     : 'Customer Name';

//   // Calculate subtotal, shipping, tax, and total in ₹
//   const calculateSubtotal = () => {
//     if (!cartItems || cartItems.length === 0) return 0;
//     return cartItems.reduce((acc, item) => {
//       let price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
//       return acc + (price * (item.quantity || 1));
//     }, 0);
//   };

//   const subtotal = calculateSubtotal();
//   const shippingCost = shippingMethod === 'standard' ? 500.00 : 700.00; // ₹500 for standard, ₹700 for express
//   const tax = subtotal * 0.09; // Assuming 9% GST
//   const total = (subtotal + shippingCost + tax - discount).toFixed(2);

//   return (
//     <div className="confirmation-container">
//       <div className="confirmation-box">
//         <h2 className="confirmation-title">Thank you, {customerName || 'Customer Name'}</h2>
//         <p className="confirmation-subtext">You'll receive a confirmation email soon.</p>
//         <p className="confirmation-order">Order number: {orderNumber}</p>

//         <div className="order-details">
//           <h3 className="order-details-title">Order Details</h3>
//           <div className="product-list">
//             {cartItems && cartItems.length > 0 ? (
//               cartItems.map((item, index) => (
//                 <div key={index} className="product-item">
//                   <div className="product-image">
//                     <span className="image-placeholder">📦</span> {/* Placeholder for product image */}
//                   </div>
//                   <div className="product-info">
//                     <h4 className="product-name">{item.name || 'Product Name'}</h4>
//                     <p className="product-options">
//                       {item.size && `Size: ${item.size} | `}
//                       {item.color && `Color: ${item.color} | `}
//                       {item.quantity && `Qty: ${item.quantity}`}
//                     </p>
//                     <p className="product-price">₹{(parseFloat(item.price.replace('₹', '').replace(/,/g, '')) * (item.quantity || 1)).toFixed(2)}</p>
//                   </div>
//                   <div className="product-quantity">Qty: {item.quantity || 1}</div>
//                 </div>
//               ))
//             ) : (
//               <p className="no-items-text">No items in this order.</p>
//             )}
//           </div>

//           <div className="summary">
//             <p className="note">Note: Your customer’s note will show here.</p>
//             <div className="summary-details">
//               <div>Total Amount</div> {/* Changed from "Subtotal" to "Total Amount" */}
//               <div>₹{subtotal.toFixed(2)}</div>
//               <div>Delivery</div>
//               <div>₹{shippingCost.toFixed(2)}</div>
//               <div>Sales Tax</div>
//               <div>₹{tax.toFixed(2)}</div> {/* Assuming 9% GST */}
//               <div className="total">Total</div>
//               <div className="total-amount">₹{total}</div>
//             </div>
//           </div>

//           <div className="address-details">
//             <div className="delivery-address">
//               <h4 className="address-title">Delivery address</h4>
//               {shippingAddress?.sameAsBilling ? (
//                 <>
//                   <p className="address-name">{customerName}</p>
//                   <p className="address-text">{[
//                     shippingAddress?.address || '',
//                     shippingAddress?.town || '',
//                     shippingAddress?.state || '',
//                     shippingAddress?.zipCode || '',
//                     shippingAddress?.country || 'India'
//                   ].filter(Boolean).join(', ')}</p>
//                   <p className="address-phone">Phone number: {shippingAddress?.phone || ''}</p>
//                   <p className="delivery-time">3-5 Business Days</p>
//                 </>
//               ) : (
//                 <>
//                   <p className="address-name">{`${shippingAddress?.firstName || ''} ${shippingAddress?.lastName || ''}`.trim() || customerName}</p>
//                   <p className="address-text">{[
//                     shippingAddress?.address || '',
//                     shippingAddress?.town || '',
//                     shippingAddress?.state || '',
//                     shippingAddress?.zipCode || '',
//                     shippingAddress?.country || 'India'
//                   ].filter(Boolean).join(', ')}</p>
//                   <p className="address-phone">Phone number: {shippingAddress?.phone || ''}</p>
//                   <p className="delivery-time">3-5 Business Days</p>
//                 </>
//               )}
//             </div>
//             <div className="billing-address">
//               <h4 className="address-title">Billing address</h4>
//               <p className="address-name">{customerName}</p>
//               <p className="address-text">{[
//                 billingAddress?.address || '',
//                 billingAddress?.town || '',
//                 billingAddress?.state || '',
//                 billingAddress?.zipCode || '',
//                 billingAddress?.country || 'India'
//               ].filter(Boolean).join(', ')}</p>
//               <p className="address-phone">Phone number: {billingAddress?.phoneNumber || ''}</p>
//             </div>
//           </div>

//           <Link to="/" className="continue-browsing">Continue Browsing</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentConfirmation;


import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './PaymentConfirmation.css';

const PaymentConfirmation = () => {
  const location = useLocation();
  
  // Debug location.state to identify issues
  useEffect(() => {
    console.log('Location state:', location.state);
  }, [location.state]);

  const { 
    cartItems = [], 
    total = 0,
    billingAddress = {}, 
    shippingAddress = {}, 
    shippingMethod = 'standard', 
    discount = 0,
    paymentMethod = ''
  } = location.state || {}; // Directly access location.state

  const [orderNumber] = useState(Math.floor(10000 + Math.random() * 90000));

  // Ensure customer name is correctly formatted
  const customerName = billingAddress.firstName && billingAddress.lastName 
    ? `${billingAddress.firstName.trim()} ${billingAddress.lastName.trim()}` 
    : 'Customer Name';

  // Calculate subtotal from cart items - handle different price formats
  const calculateSubtotal = () => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce((acc, item) => {
      let price = 0;
      if (typeof item.price === 'string') {
        price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
      } else if (typeof item.price === 'number') {
        price = item.price;
      } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
        price = parseFloat(item.price['$numberDouble']) || 0;
      }
      return acc + (price * (item.quantity || 1));
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingCost = shippingMethod === 'standard' ? 100.00 : 150.00;
  const tax = subtotal * 0.09; // 9% GST
  
  // Use the passed total if available, otherwise calculate it
  const finalTotal = total || (subtotal + shippingCost + tax - discount).toFixed(2);

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h2 className="confirmation-title">Thank you, {customerName}</h2>
        <p className="confirmation-subtext">You'll receive a confirmation email soon.</p>
        <p className="confirmation-order">Order number: {orderNumber}</p>

        <div className="order-details">
          <h3 className="order-details-title">Order Details</h3>
          <div className="product-list">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                // Handle price calculation with different formats
                let price = 0;
                if (typeof item.price === 'string') {
                  price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
                } else if (typeof item.price === 'number') {
                  price = item.price;
                } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
                  price = parseFloat(item.price['$numberDouble']) || 0;
                }
                
                return (
                  <div key={index} className="product-item">
                  <div className="product-image">
                    {item.image ? (
                    <img src={item.image} alt={item.name || 'Product Image'} />
                    ) : (
                    <span className="image-placeholder">📦</span>
                    )}
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">{item.name || 'Product Name'}</h4>
                    <p className="product-options">
                    {item.size && `Size: ${item.size} | `}
                    {item.color && `Color: ${item.color} | `}
                    {item.quantity && `Qty: ${item.quantity}`}
                    </p>
                    <p className="product-price">₹{(price * (item.quantity || 1)).toFixed(2)}</p>
                  </div>
                  <div className="product-quantity">Qty: {item.quantity || 1}</div>
                  </div>
                );
              })
            ) : (
              <p className="no-items-text">No items in this order.</p>
            )}
          </div>

          <div className="summary">
            <p className="note">Note: Your customer's note will show here.</p>
            <div className="summary-details">
              <div>Total Amount</div>
              <div>₹{subtotal.toFixed(2)}</div>
              <div>Delivery</div>
              <div>₹{shippingCost.toFixed(2)}</div>
              <div>Sales Tax</div>
              <div>₹{tax.toFixed(2)}</div>
              {discount > 0 && (
                <>
                  <div>Discount</div>
                  <div>-₹{discount.toFixed(2)}</div>
                </>
              )}
              <div className="total">Total</div>
              <div className="total-amount">₹{finalTotal}</div>
            </div>
          </div>

          <div className="address-details">
            <div className="delivery-address">
              <h4 className="address-title">Delivery address</h4>
              {shippingAddress.sameAsBilling ? (
                <>
                  <p className="address-name">{customerName}</p>
                  <p className="address-text">{[
                    billingAddress.address || '',
                    billingAddress.town || '',
                    billingAddress.state || '',
                    billingAddress.zipCode || '',
                    billingAddress.country || 'India'
                  ].filter(Boolean).join(', ')}</p>
                  <p className="address-phone">Phone number: {billingAddress.phoneNumber || ''}</p>
                  <p className="delivery-time">3-5 Business Days</p>
                </>
              ) : (
                <>
                  <p className="address-name">{`${shippingAddress.firstName || ''} ${shippingAddress.lastName || ''}`.trim() || customerName}</p>
                  <p className="address-text">{[
                    shippingAddress.address || '',
                    shippingAddress.town || '',
                    shippingAddress.state || '',
                    shippingAddress.zipCode || '',
                    shippingAddress.country || 'India'
                  ].filter(Boolean).join(', ')}</p>
                  <p className="address-phone">Phone number: {shippingAddress.phone || ''}</p>
                  <p className="delivery-time">3-5 Business Days</p>
                </>
              )}
            </div>
            <div className="billing-address">
              <h4 className="address-title">Billing address</h4>
              <p className="address-name">{customerName}</p>
              <p className="address-text">{[
                billingAddress.address || '',
                billingAddress.town || '',
                billingAddress.state || '',
                billingAddress.zipCode || '',
                billingAddress.country || 'India'
              ].filter(Boolean).join(', ')}</p>
              <p className="address-phone">Phone number: {billingAddress.phoneNumber || ''}</p>
            </div>
          </div>

          <div className="payment-method-info">
            <h4 className="payment-method-title">Payment Method</h4>
            <p className="payment-method-text">
              {paymentMethod === 'credit' && 'Credit Card'}
              {paymentMethod === 'afterpay' && 'Afterpay'}
              {paymentMethod === 'paypal' && 'PayPal'}
              {!paymentMethod && 'Standard Payment'}
            </p>
          </div>

          <Link to="/" className="continue-browsing">Continue Browsing</Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;