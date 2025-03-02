import React, { useState, useEffect } from 'react';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Transform the data to match your frontend structure
        const transformedProducts = data.map(product => ({
          id: product._id,
          name: product.product_name,
          price: `$${product.price}`,
          description: product.product_description,
          // If you don't have images in your backend, you can use placeholder images
          image: `/assets/images/${product.product_name.toLowerCase().replace(/\s+/g, '')}.png`,
        }));
        
        setProducts(transformedProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to update quantity
  const updateQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  // Add to Cart Function
  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    alert(`${quantity}x ${product.name} added to cart!`);
  };

  if (loading) {
    return (
      <div className="shop-container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">Gym Supplements Store</h1>
      <p className="shop-subtitle">Get the best fitness supplements for peak performance.</p>

      <div className="shop-products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>

            <div className="quantity-selector">
              Qty: {quantities[product.id] || 1}{' '}
              <span 
                className="plus-sign" 
                onClick={() => updateQuantity(product.id)}
              >
                +
              </span>
            </div>

            <button 
              className="add-to-cart" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-link">
        <a href="/cart">
          Go to Cart ({cart.reduce((total, item) => total + item.quantity, 0)} items)
        </a>
      </div>
    </div>
  );
}

export default Shop;