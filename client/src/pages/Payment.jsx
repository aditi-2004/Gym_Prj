// // import React, { useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import './Payment.css';

// // const Payment = () => {
// //   const location = useLocation();
// //   const { cartItems, total, discount } = location.state || {};  // Ensure cart data is passed here

// //   const [paymentTotal, setPaymentTotal] = useState(0);

// //   useEffect(() => {
// //     if (cartItems && total !== undefined) {
// //       const finalTotal = (parseFloat(total) - discount).toFixed(2);
// //       setPaymentTotal(finalTotal);
// //     }
// //   }, [cartItems, total, discount]);

// //   return (
// //     <div className="payment-container">
// //       <h2 className="payment-heading">Complete Your Purchase</h2>
// //       <p className="payment-subheading">Securely complete your purchase with the details below.</p>

// //       {cartItems && cartItems.length > 0 ? (
// //         <>
// //           <div className="order-summary">
// //             <h3 className="order-summary-heading">Order Summary</h3>
// //             <ul className="order-items">
// //               {cartItems.map((item, index) => (
// //                 <li key={index} className="order-item">
// //                   <span>{item.name}</span> 
// //                   <span>Size: {item.size}</span> 
// //                   <span>Color: {item.color}</span> 
// //                   <span>Quantity: {item.quantity}</span> 
// //                   <span>{item.price}</span>
// //                 </li>
// //               ))}
// //             </ul>

// //             <div className="total-summary">
// //               <div>
// //                 <span>Total:</span> <span>${total}</span>
// //               </div>
// //               <div>
// //                 <span>Discount:</span> <span>-${discount}</span>
// //               </div>
// //               <div className="final-total">
// //                 <span>Final Total:</span> <span>${paymentTotal}</span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="payment-details">
// //             <h3 className="payment-details-heading">Enter Payment Details</h3>
// //             <div className="payment-form">
// //               <label>Card Number</label>
// //               <input type="text" placeholder="1234 5678 9012 3456" />
              
// //               <label>Cardholder Name</label>
// //               <input type="text" placeholder="John Doe" />
              
// //               <div className="payment-date">
// //                 <div>
// //                   <label>Expiry Date</label>
// //                   <input type="text" placeholder="MM/YY" />
// //                 </div>
// //                 <div>
// //                   <label>CVV</label>
// //                   <input type="text" placeholder="123" />
// //                 </div>
// //               </div>

// //               <div className="payment-submit">
// //                 <button className="pay-button">Pay ${paymentTotal}</button>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       ) : (
// //         <div>No items in the cart.</div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Payment;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useHistory } from 'react-router-dom'; // Using useHistory for react-router-dom v5
// import './Payment.css';

// const Payment = () => {
//   const location = useLocation();
//   const { cartItems, total, discount: initialDiscount } = location.state || {}; // Ensure cart data is passed here
//   const history = useHistory(); // Use useHistory for react-router-dom v5

//   const [paymentTotal, setPaymentTotal] = useState(0);
//   const [billingAddress, setBillingAddress] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '', // Ensure this is used consistently
//     country: 'India', // Default to India
//     address: '',
//     town: '',
//     state: '', // Changed from region to state for clarity
//     zipCode: ''
//   });
//   const [shippingAddress, setShippingAddress] = useState({
//     sameAsBilling: true,
//     firstName: '',
//     lastName: '',
//     address: '',
//     town: '',
//     state: '', // Changed from region to state for clarity
//     zipCode: '',
//     country: 'India',
//     phone: ''
//   });
//   const [shippingMethod, setShippingMethod] = useState('standard'); // Default shipping method
//   const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default payment method
//   const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState(initialDiscount || 0); // Added discount state
//   const [error, setError] = useState('');

//   // List of Indian states for the country dropdown and state dropdown
//   const indianStates = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 
//     'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
//     'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
//     'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 
//     'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
//   ];

//   useEffect(() => {
//     if (cartItems && total !== undefined) {
//       // Calculate the total based on cart items, shipping, and tax in ₹
//       const subtotal = cartItems.reduce((acc, item) => {
//         let price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
//         return acc + (price * item.quantity);
//       }, 0);
//       const shippingCost = shippingMethod === 'standard' ? 500.00 : 700.00; // ₹500 for standard, ₹700 for express
//       const tax = subtotal * 0.09; // Assuming 9% GST
//       const finalTotal = (subtotal + shippingCost + tax - discount).toFixed(2);
//       setPaymentTotal(finalTotal);
//     }
//   }, [cartItems, total, discount, shippingMethod]);

//   const handleAddressChange = (e, type) => {
//     const { name, value } = e.target;
//     if (type === 'billing') {
//       setBillingAddress({ ...billingAddress, [name]: value });
//     } else {
//       setShippingAddress({ ...shippingAddress, [name]: value });
//     }
//   };

//   const handleShippingChange = (e) => {
//     setShippingMethod(e.target.value);
//   };

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleApplyPromo = () => {
//     if (promoCode === 'DISCOUNT10') {
//       setDiscount(10); // Apply ₹10 discount
//     } else {
//       setDiscount(0); // Reset discount if promo code is invalid
//       setError('Invalid promo code.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!billingAddress.firstName || !billingAddress.lastName || !billingAddress.email || !billingAddress.phoneNumber || !billingAddress.address || !billingAddress.town || !billingAddress.state || !billingAddress.zipCode) {
//       setError('Please fill in all billing address fields.');
//       return;
//     }
//     if (!shippingAddress.sameAsBilling && (!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.address || !shippingAddress.town || !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.phone)) {
//       setError('Please fill in all shipping address fields.');
//       return;
//     }
//     // Debug the state before pushing to confirm data
//     console.log('Pushing state to PaymentConfirmation:', {
//       cartItems,
//       total: paymentTotal,
//       discount,
//       billingAddress,
//       shippingAddress,
//       shippingMethod,
//       paymentMethod
//     });
//     // Simulate payment processing and navigate to confirmation page
//     history.push('/payment-confirmation', {
//       state: {
//         cartItems,
//         total: paymentTotal,
//         discount,
//         billingAddress,
//         shippingAddress,
//         shippingMethod,
//         paymentMethod
//       }
//     });
//   };

//   return (
//     <div className="payment-container">
//       <h2 className="payment-heading">CHECKOUT</h2>
//       <p className="payment-subheading">Login or continue to shop as guest</p>

//       {cartItems && cartItems.length > 0 ? (
//         <form onSubmit={handleSubmit}>
//           <div className="checkout-grid">
//             <div className="billing-address">
//               <h3 className="section-heading">BILLING ADDRESS</h3>
//               <p className="required-field">*Required Field</p>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name*"
//                 value={billingAddress.firstName}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name*"
//                 value={billingAddress.lastName}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address*"
//                 value={billingAddress.email}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="Phone Number*"
//                 value={billingAddress.phoneNumber}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               />
//               <select
//                 name="country"
//                 value={billingAddress.country}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//               >
//                 <option value="India">India</option>
//                 {/* Add more countries if needed, but defaulting to India */}
//               </select>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={billingAddress.address}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               />
//               <input
//                 type="text"
//                 name="town"
//                 placeholder="Town/Suburb*"
//                 value={billingAddress.town}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               />
//               <select
//                 name="state"
//                 value={billingAddress.state}
//                 onChange={(e) => handleAddressChange(e, 'billing')}
//                 required
//               >
//                 <option value="">Select State</option>
//                 {indianStates.map((state) => (
//                   <option key={state} value={state}>{state}</option>
//                 ))}
//               </select>
//               <div className="address-row">
//                 <input
//                   type="text"
//                   name="zipCode"
//                   placeholder="Zip/Postal Code*"
//                   value={billingAddress.zipCode}
//                   onChange={(e) => handleAddressChange(e, 'billing')}
//                   required
//                 />
//               </div>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={shippingAddress.sameAsBilling}
//                   onChange={(e) => setShippingAddress({ ...shippingAddress, sameAsBilling: e.target.checked })}
//                 />
//                 Ship to the same address
//               </label>
//               <label>
//                 <input type="checkbox" /> Create an account
//               </label>
//             </div>

//             <div className="shipping-payment">
//               <div className="shipping-method">
//                 <h3 className="section-heading">SELECT SHIPPING METHOD</h3>
//                 <label>
//                   <input
//                     type="radio"
//                     value="standard"
//                     checked={shippingMethod === 'standard'}
//                     onChange={handleShippingChange}
//                   />
//                   Standard Shipping ₹500.00
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="express"
//                     checked={shippingMethod === 'express'}
//                     onChange={handleShippingChange}
//                   />
//                   Express Shipping ₹700.00
//                 </label>

//                 <div className="promo-code">
//                   <label>PROMO CODE:</label>
//                   <input
//                     type="text"
//                     value={promoCode}
//                     onChange={(e) => setPromoCode(e.target.value)}
//                     placeholder="Enter code"
//                   />
//                   <button className="apply-btn" onClick={handleApplyPromo}>Apply</button>
//                 </div>
//               </div>

//               <div className="payment-method">
//                 <h3 className="section-heading">PAYMENT</h3>
//                 <label>
//                   <input
//                     type="radio"
//                     value="credit"
//                     checked={paymentMethod === 'credit'}
//                     onChange={handlePaymentChange}
//                   />
//                   Credit Card
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="afterpay"
//                     checked={paymentMethod === 'afterpay'}
//                     onChange={handlePaymentChange}
//                   />
//                   Afterpay - Interest-free payments
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     value="paypal"
//                     checked={paymentMethod === 'paypal'}
//                     onChange={handlePaymentChange}
//                   />
//                   PayPal Express Checkout
//                 </label>
//                 {paymentMethod === 'paypal' && (
//                   <p className="paypal-note" style={{ color: '#3f9b92' }}>
//                     You will be redirected to the PayPal website.
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="order-review">
//               <h3 className="section-heading">REVIEW ORDER</h3>
//               <ul className="order-items">
//                 {cartItems.map((item, index) => (
//                   <li key={index} className="order-item">
//                     <span>{item.name}</span>
//                     <span>Qty: {item.quantity}</span>
//                     <span>₹{(parseFloat(item.price.replace('₹', '').replace(/,/g, '')) * item.quantity).toFixed(2)}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="total-summary">
//                 <div>
//                   <span>Total Amount:</span> <span>₹{cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('₹', '').replace(/,/g, '')) * item.quantity, 0).toFixed(2)}</span> {/* Changed to "Total Amount" */}
//                 </div>
//                 <div>
//                   <span>Shipping:</span> <span>₹{shippingMethod === 'standard' ? '500.00' : '700.00'}</span>
//                 </div>
//                 <div>
//                   <span>Sales Tax:</span> <span>₹{((cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('₹', '').replace(/,/g, '')) * item.quantity, 0)) * 0.09).toFixed(2)}</span> {/* Assuming 9% GST */}
//                 </div>
//                 <div className="final-total">
//                   <span>Grand Total:</span> <span>₹{paymentTotal}</span>
//                 </div>
//               </div>
//               {error && <div className="error-message">{error}</div>}
//               <button type="submit" className="process-order-btn">PROCESS ORDER</button>
//               <div className="payment-logos">
//                 <img src="/assets/images/visa.png" alt="Visa" className="payment-logo" />
//                 <img src="/assets/images/mastercard.png" alt="MasterCard" className="payment-logo" />
//                 <img src="/assets/images/paypal.png" alt="PayPal" className="payment-logo" />
//                 <img src="/assets/images/thawte.png" alt="Thawte" className="payment-logo" />
//               </div>
//             </div>
//           </div>
//         </form>
//       ) : (
//         <div>No items in the cart.</div>
//       )}
//     </div>
//   );
// };

// export default Payment;


//adding payemnt proeprply using shop 
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'; // Using useHistory for react-router-dom v5
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { cartItems, total: initialTotal, discount: initialDiscount } = location.state || {};
  const history = useHistory(); // Use useHistory for react-router-dom v5

  const [paymentTotal, setPaymentTotal] = useState(0);
  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'India',
    address: '',
    town: '',
    state: '',
    zipCode: ''
  });
  const [shippingAddress, setShippingAddress] = useState({
    sameAsBilling: true,
    firstName: '',
    lastName: '',
    address: '',
    town: '',
    state: '',
    zipCode: '',
    country: 'India',
    phone: ''
  });
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(initialDiscount || 0);
  const [error, setError] = useState('');

  // List of Indian states for the country dropdown and state dropdown
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  useEffect(() => {
    if (cartItems && initialTotal !== undefined) {
      // Debug the cart items to identify the price structure
      console.log('Cart items in Payment:', cartItems);
      
      // Calculate the total based on cart items, shipping, and tax in ₹
      const subtotal = cartItems.reduce((acc, item) => {
        // Handle price: Ensure it's a number, not a string or object
        let price = 0;
        if (typeof item.price === 'string') {
          // If price is a string (e.g., "₹119.53"), remove ₹ and commas
          price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
        } else if (typeof item.price === 'number') {
          // If price is a number (e.g., 119.53), use it directly
          price = item.price;
        } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
          // If price is in MongoDB numberDouble format (e.g., {"$numberDouble":"119.53"})
          price = parseFloat(item.price['$numberDouble']) || 0;
        } else {
          console.warn(`Invalid price format for item ${item.name}:`, item.price);
          price = 0; // Fallback to 0 if price is invalid
        }

        return acc + (price * (item.quantity || 1)); // Default quantity to 1 if not set
      }, 0);

      const shippingCost = shippingMethod === 'standard' ? 100.00 : 150.00; // ₹500 for standard, ₹700 for express
      const tax = subtotal * 0.09; // Assuming 9% GST
      const finalTotal = (subtotal + shippingCost + tax - discount).toFixed(2);
      setPaymentTotal(finalTotal);
    } else {
      setPaymentTotal(0);
    }
  }, [cartItems, initialTotal, discount, shippingMethod]);

  const handleAddressChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'billing') {
      setBillingAddress({ ...billingAddress, [name]: value });
    } else {
      setShippingAddress({ ...shippingAddress, [name]: value });
    }
  };

  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleApplyPromo = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(10); // Apply ₹10 discount
    } else {
      setDiscount(0); // Reset discount if promo code is invalid
      setError('Invalid promo code.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billingAddress.firstName || !billingAddress.lastName || !billingAddress.email || !billingAddress.phoneNumber || !billingAddress.address || !billingAddress.town || !billingAddress.state || !billingAddress.zipCode) {
      setError('Please fill in all billing address fields.');
      return;
    }
    if (!shippingAddress.sameAsBilling && (!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.address || !shippingAddress.town || !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.phone)) {
      setError('Please fill in all shipping address fields.');
      return;
    }
    // Debug the state before pushing to confirm data
    console.log('Pushing state to PaymentConfirmation:', {
      cartItems,
      total: paymentTotal,
      discount,
      billingAddress,
      shippingAddress,
      shippingMethod,
      paymentMethod
    });
    // Simulate payment processing and navigate to confirmation page
    history.push('/payment-confirmation', {
      
        cartItems,
        total: paymentTotal,
        discount,
        billingAddress,
        shippingAddress,
        shippingMethod,
        paymentMethod
      
    });
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">CHECKOUT</h2>
      <p className="payment-subheading">Login or continue to shop as guest</p>

      {cartItems && cartItems.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <div className="checkout-grid">
            <div className="billing-address">
              <h3 className="section-heading">BILLING ADDRESS</h3>
              <p className="required-field">*Required Field</p>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={billingAddress.firstName}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={billingAddress.lastName}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={billingAddress.email}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={billingAddress.phoneNumber}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <select
                name="country"
                value={billingAddress.country}
                onChange={(e) => handleAddressChange(e, 'billing')}
              >
                <option value="India">India</option>
                {/* Add more countries if needed, but defaulting to India */}
              </select>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={billingAddress.address}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="text"
                name="town"
                placeholder="Town/Suburb*"
                value={billingAddress.town}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <select
                name="state"
                value={billingAddress.state}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <div className="address-row">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip/Postal Code*"
                  value={billingAddress.zipCode}
                  onChange={(e) => handleAddressChange(e, 'billing')}
                  required
                />
              </div>
              <label>
                <input
                  type="checkbox"
                  checked={shippingAddress.sameAsBilling}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, sameAsBilling: e.target.checked })}
                />
                Ship to the same address
              </label>
              <label>
                <input type="checkbox" /> Create an account
              </label>
            </div>

            <div className="shipping-payment">
              <div className="shipping-method">
                <h3 className="section-heading">SELECT SHIPPING METHOD</h3>
                <label>
                  <input
                    type="radio"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={handleShippingChange}
                  />
                  Standard Shipping ₹100.00
                </label>
                <label>
                  <input
                    type="radio"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={handleShippingChange}
                  />
                  Express Shipping ₹150.00
                </label>

                <div className="promo-code">
                  <label>PROMO CODE:</label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                  />
                  <button className="apply-btn" onClick={handleApplyPromo}>Apply</button>
                </div>
              </div>

              <div className="payment-method">
                <h3 className="section-heading">PAYMENT</h3>
                <label>
                  <input
                    type="radio"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={handlePaymentChange}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    value="afterpay"
                    checked={paymentMethod === 'afterpay'}
                    onChange={handlePaymentChange}
                  />
                  Afterpay - Interest-free payments
                </label>
                <label>
                  <input
                    type="radio"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={handlePaymentChange}
                  />
                  PayPal Express Checkout
                </label>
                {paymentMethod === 'paypal' && (
                  <p className="paypal-note" style={{ color: '#3f9b92' }}>
                    You will be redirected to the PayPal website.
                  </p>
                )}
              </div>
            </div>

            <div className="order-review">
              <h3 className="section-heading">REVIEW ORDER</h3>
              <ul className="order-items">
                {cartItems.map((item, index) => (
                  <li key={index} className="order-item">
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity || 1}</span>
                    <span>
                      ₹{(
                        typeof item.price === 'string' 
                          ? parseFloat(item.price.replace('₹', '').replace(/,/g, '')) 
                          : (typeof item.price === 'number' 
                            ? item.price 
                            : (item.price && item.price['$numberDouble'] 
                              ? parseFloat(item.price['$numberDouble']) 
                              : 0)
                          )
                      ).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="total-summary">
                <div>
                  <span>Total Amount:</span> <span>₹{cartItems.reduce((acc, item) => {
                    let price = 0;
                    if (typeof item.price === 'string') {
                      price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
                    } else if (typeof item.price === 'number') {
                      price = item.price;
                    } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
                      price = parseFloat(item.price['$numberDouble']) || 0;
                    } else {
                      console.warn(`Invalid price format for item ${item.name}:`, item.price);
                      price = 0;
                    }
                    return acc + (price * (item.quantity || 1));
                  }, 0).toFixed(2)}</span>
                </div>
                <div>
                  <span>Shipping:</span> <span>₹{shippingMethod === 'standard' ? '100.00' : '150.00'}</span>
                </div>
                <div>
                  <span>Sales Tax:</span> <span>₹{((cartItems.reduce((acc, item) => {
                    let price = 0;
                    if (typeof item.price === 'string') {
                      price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
                    } else if (typeof item.price === 'number') {
                      price = item.price;
                    } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
                      price = parseFloat(item.price['$numberDouble']) || 0;
                    } else {
                      console.warn(`Invalid price format for item ${item.name}:`, item.price);
                      price = 0;
                    }
                    return acc + (price * (item.quantity || 1));
                  }, 0)) * 0.09).toFixed(2)}</span>
                </div>
                <div className="final-total">
                  <span>Grand Total:</span> <span>₹{paymentTotal}</span>
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="process-order-btn">PROCESS ORDER</button>
              <div className="payment-logos">
                <img src="/assets/images/visa.png" alt="Visa" className="payment-logo" />
                <img src="/assets/images/mastercard.png" alt="MasterCard" className="payment-logo" />
                <img src="/assets/images/paypal.png" alt="PayPal" className="payment-logo" />
                <img src="/assets/images/thawte.png" alt="Thawte" className="payment-logo" />
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>No items in the cart.</div>
      )}
    </div>
  );
};

export default Payment;