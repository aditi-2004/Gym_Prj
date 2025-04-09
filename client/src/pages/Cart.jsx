
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; // Using useHistory for react-router-dom v5
// import './Cart.css';

// const Cart = () => {
//   const history = useHistory();
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [discount] = useState(0);

//   useEffect(() => {
//     // Load cart data from localStorage and log it for debugging
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     console.log('Cart items from localStorage:', storedCart);
//     setCartItems(storedCart);
//     calculateTotal(storedCart);
//   }, []);

//   const calculateTotal = (cart) => {
//     if (!cart || cart.length === 0) {
//       setTotal(0);
//       return;
//     }

//     const totalAmount = cart.reduce((acc, item) => {
//       // Handle price: Ensure it's a number, not a string or object
//       let price = 0;
//       if (typeof item.price === 'string') {
//         // If price is a string (e.g., "Rs. 1,299.00" or "₹2,999"), remove currency symbols and commas
//         price = parseFloat(item.price.replace(/Rs\.|₹/g, '').replace(/,/g, '')) || 0;
//       } else if (typeof item.price === 'number') {
//         // If price is a number (e.g., 1299), use it directly
//         price = item.price;
//       } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
//         // If price is in MongoDB numberDouble format (e.g., {"$numberDouble":"1299.00"})
//         price = parseFloat(item.price['$numberDouble']) || 0;
//       } else {
//         console.warn(`Invalid price format for item ${item.name}:`, item.price);
//         price = 0; // Fallback to 0 if price is invalid
//       }

//       return acc + (price * (item.quantity || 1)); // Default quantity to 1 if not set
//     }, 0);
//     setTotal(totalAmount);
//   };

//   const handleCheckout = () => {
//     // Push the cart data to the Payment page
//     history.push({
//       pathname: '/payment',
//       state: { cartItems, total, discount },
//     });
//   };

//   return (
//     <div className="cart-container">
//       <h2 className="cart-title">Your Shopping Cart</h2>
      
//       {cartItems.length === 0 ? (
//         <p className="empty-cart-text">Your cart is empty.</p>
//       ) : (
//         <div className="cart-content">
//           <ul className="cart-items-list">
//             {cartItems.map((item) => (
//               <li key={item.id} className="cart-item">
//                 <img src={item.image || '/assets/images/default-product.png'} alt={item.name} className="cart-item-image" onError={(e) => e.target.src = '/assets/images/default-product.png'} />
//                 <div className="cart-item-details">
//                   <h3 className="item-name">{item.name}</h3>
//                   {item.size && <p><strong>Size:</strong> {item.size}</p>}
//                   {item.color && <p><strong>Color:</strong> {item.color}</p>}
//                   <p><strong>Quantity:</strong> {item.quantity || 1}</p>
//                   <p className="item-price"><strong>Price:</strong> ₹{(typeof item.price === 'string' ? parseFloat(item.price.replace(/Rs\.|₹/g, '').replace(/,/g, '')) : (typeof item.price === 'number' ? item.price : (item.price && item.price['$numberDouble'] ? parseFloat(item.price['$numberDouble']) : 0))).toFixed(2)}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
          
//           <div className="cart-summary">
//             <h3 className="summary-title">Order Summary</h3>
//             <div className="cart-total">
//               <span>Total:</span>
//               <span className="total-price">₹{total.toFixed(2)}</span>
//             </div>
//             <button onClick={handleCheckout} className="checkout-btn">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Ensure each item has a unique id if not already present
    const updatedCart = storedCart.map((item, index) => ({
      ...item,
      id: item.id || `item_${index}_${Date.now()}`, // Generate unique id if missing
    }));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    calculateTotal(updatedCart);
  }, []);

  const calculateTotal = (cart) => {
    if (!cart || cart.length === 0) {
      setTotal(0);
      return;
    }

    const totalAmount = cart.reduce((acc, item) => {
      let price = 0;
      if (typeof item.price === 'string') {
        price = parseFloat(item.price.replace(/Rs\.|₹/g, '').replace(/,/g, '')) || 0;
      } else if (typeof item.price === 'number') {
        price = item.price;
      } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
        price = parseFloat(item.price['$numberDouble']) || 0;
      } else {
        console.warn(`Invalid price format for item ${item.name}:`, item.price);
        price = 0;
      }
      return acc + (price * (item.quantity || 1));
    }, 0);
    setTotal(totalAmount);
  };

  const handleDelete = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    history.push({
      pathname: '/payment',
      state: { cartItems, total, discount },
    });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart-text">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image || '/assets/images/default-product.png'} alt={item.name} className="cart-item-image" onError={(e) => e.target.src = '/assets/images/default-product.png'} />
                <div className="cart-item-details">
                  <h3 className="item-name">{item.name}</h3>
                  {item.size && <p><strong>Size:</strong> {item.size}</p>}
                  {item.color && <p><strong>Color:</strong> {item.color}</p>}
                  <p><strong>Quantity:</strong> {item.quantity || 1}</p>
                  <p className="item-price"><strong>Price:</strong> ₹{(typeof item.price === 'string' ? parseFloat(item.price.replace(/Rs\.|₹/g, '').replace(/,/g, '')) : (typeof item.price === 'number' ? item.price : (item.price && item.price['$numberDouble'] ? parseFloat(item.price['$numberDouble']) : 0))).toFixed(2)}</p>
                </div>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>×</button>
              </li>
            ))}
          </ul>
          
          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">₹{total.toFixed(2)}</span>
            </div>
            <button onClick={handleCheckout} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;