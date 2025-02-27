import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Merchandise.css";

const products = [
  {
    id: 1,
    name: "Gym T-Shirt",
    price: "$25",
    image: "/assets/images/tshirts.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
  },
  {
    id: 2,
    name: "Workout Shorts",
    price: "$30",
    image: "/assets/images/shorts.png",
    sizes: ["S", "M", "L", "XL"],
    colors: [],
  },
  {
    id: 3,
    name: "Fitness Gloves",
    price: "$15",
    image: "/assets/images/gloves.png",
    sizes: [],
    colors: [],
  },
  {
    id: 4,
    name: "Gym Water Bottle",
    price: "$10",
    image: "/assets/images/bottle.png",
    sizes: [],
    colors: [],
  },
];

function Merchandise() {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    if (!selectedSize && product.sizes.length) {
      alert("Please select a size");
      return;
    }
    if (product.colors.length && !selectedColor) {
      alert("Please select a color");
      return;
    }

    const updatedProduct = {
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };
    const updatedCart = [...cart, updatedProduct];
    setCart(updatedCart);

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-green-400">
          Merchandise Store
        </h1>
        <p className="text-xl text-center text-gray-300 mb-8">
          Get the best fitness gear to power your workouts!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg"
              />
              <h2 className="text-2xl font-semibold text-green-300">
                {product.name}
              </h2>
              <p className="text-lg text-gray-200 font-bold">{product.price}</p>

              {product.sizes.length > 0 && (
                <div className="mt-2">
                  <label className="block text-gray-300">Select Size</label>
                  <select
                    className="mt-1 bg-gray-700 text-white p-2 rounded-md"
                    onChange={(e) => setSelectedSize(e.target.value)}
                    value={selectedSize}
                  >
                    <option value="">Select a size</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {product.colors.length > 0 && (
                <div className="mt-2">
                  <label className="block text-gray-300">Select Color</label>
                  <select
                    className="mt-1 bg-gray-700 text-white p-2 rounded-md"
                    onChange={(e) => setSelectedColor(e.target.value)}
                    value={selectedColor}
                  >
                    <option value="">Select a color</option>
                    {product.colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full font-semibold text-lg"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Link */}
        {/* <div className="text-center mt-12">
          <Link
            to="/cart"
            className="text-green-400 hover:underline text-xl font-bold"
          >
            {cart.length > 0 ? `Go to Cart (${cart.length} items)` : 'Go to Cart'}
          </Link>
        </div> */}

        {/* Cart Section inside a Box */}
        <div className="cart-box text-center mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-2">
            Shopping Cart
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            {cart.length > 0
              ? `You have ${cart.length} items in your cart.`
              : "Your cart is empty."}
          </p>
          <Link to="/cart">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full font-semibold text-lg">
              {cart.length > 0
                ? `Go to Cart (${cart.length} items)`
                : "Go to Cart"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
