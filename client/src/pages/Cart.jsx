// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Cart.css';

// const Cart = () => {
//   const history = useHistory();
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [discount, setDiscount] = useState(0);

//   useEffect(() => {
//     // Load cart data from localStorage
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCart);
//     calculateTotal(storedCart);
//   }, []);

//   const calculateTotal = (cart) => {
//     const totalAmount = cart.reduce((acc, item) => {
//       return acc + parseFloat(item.price.replace('$', '')) * item.quantity;
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
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 <span>{item.name}</span>
//                 <span>Size: {item.size}</span>
//                 <span>Color: {item.color}</span>
//                 <span>Quantity: {item.quantity}</span>
//                 <span>Price: {item.price}</span>
//               </li>
//             ))}
//           </ul>
//           <div>
//             <h3>Total: ${total}</h3>
//             <button onClick={handleCheckout}>Proceed to Checkout</button>
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
    // Load cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cart) => {
    const totalAmount = cart.reduce((acc, item) => {
      return acc + parseFloat(item.price.replace('$', '')) * item.quantity;
    }, 0);
    setTotal(totalAmount);
  };

  const handleCheckout = () => {
    // Push the cart data to the Payment page
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
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  {item.size && <p><strong>Size:</strong> {item.size}</p>}
                  {item.color && <p><strong>Color:</strong> {item.color}</p>}
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p className="cart-price"><strong>Price:</strong> {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${total.toFixed(2)}</span>
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
