// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Merchandise.css";

// const products = [
//   {
//     id: 1,
//     name: "Gym T-Shirt",
//     price: "$25",
//     image: "/assets/images/merch1.png",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black", "White", "Grey"],
//   },
//   {
//     id: 2,
//     name: "Workout Shorts",
//     price: "$30",
//     image: "/assets/images/merch2.png",
//     sizes: ["S", "M", "L", "XL"],
//     colors: [],
//   },
//   {
//     id: 3,
//     name: "Fitness Gloves",
//     price: "$15",
//     image: "/assets/images/merch3.png",
//     sizes: [],
//     colors: [],
//   },
//   {
//     id: 4,
//     name: "Gym Water Bottle",
//     price: "$10",
//     image: "/assets/images/bottle.png",
//     sizes: [],
//     colors: [],
//   },
// ];

// function Merchandise() {
//   const [cart, setCart] = useState([]);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");

//   // Function to handle adding items to the cart
//   const addToCart = (product) => {
//     if (!selectedSize && product.sizes.length) {
//       alert("Please select a size");
//       return;
//     }
//     if (product.colors.length && !selectedColor) {
//       alert("Please select a color");
//       return;
//     }

//     const updatedProduct = {
//       ...product,
//       size: selectedSize,
//       color: selectedColor,
//       quantity: 1,
//     };
//     const updatedCart = [...cart, updatedProduct];
//     setCart(updatedCart);

//     // Store the updated cart in localStorage
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     alert(`${product.name} has been added to your cart!`);
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen py-10 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-5xl font-extrabold text-center mb-6 text-green-400">
//           Merchandise Store
//         </h1>
//         <p className="text-xl text-center text-gray-300 mb-8">
//           Get the best fitness gear to power your workouts!
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg"
//               />
//               <h2 className="text-2xl font-semibold text-green-300">
//                 {product.name}
//               </h2>
//               <p className="text-lg text-gray-200 font-bold">{product.price}</p>

//               {product.sizes.length > 0 && (
//                 <div className="mt-2">
//                   <label className="block text-gray-300">Select Size</label>
//                   <select
//                     className="mt-1 bg-gray-700 text-white p-2 rounded-md"
//                     onChange={(e) => setSelectedSize(e.target.value)}
//                     value={selectedSize}
//                   >
//                     <option value="">Select a size</option>
//                     {product.sizes.map((size) => (
//                       <option key={size} value={size}>
//                         {size}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               {product.colors.length > 0 && (
//                 <div className="mt-2">
//                   <label className="block text-gray-300">Select Color</label>
//                   <select
//                     className="mt-1 bg-gray-700 text-white p-2 rounded-md"
//                     onChange={(e) => setSelectedColor(e.target.value)}
//                     value={selectedColor}
//                   >
//                     <option value="">Select a color</option>
//                     {product.colors.map((color) => (
//                       <option key={color} value={color}>
//                         {color}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <button
//                 className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full font-semibold text-lg"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Cart Link */}
//         {/* <div className="text-center mt-12">
//           <Link
//             to="/cart"
//             className="text-green-400 hover:underline text-xl font-bold"
//           >
//             {cart.length > 0 ? `Go to Cart (${cart.length} items)` : 'Go to Cart'}
//           </Link>
//         </div> */}

//         {/* Cart Section inside a Box */}
//         <div className="cart-box text-center mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-green-400 mb-2">
//             Shopping Cart
//           </h2>
//           <p className="text-lg text-gray-300 mb-4">
//             {cart.length > 0
//               ? `You have ${cart.length} items in your cart.`
//               : "Your cart is empty."}
//           </p>
//           <Link to="/cart">
//             <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 w-full font-semibold text-lg">
//               {cart.length > 0
//                 ? `Go to Cart (${cart.length} items)`
//                 : "Go to Cart"}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Merchandise;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Merchandise.css";
import { motion } from "framer-motion"; // Add framer-motion for animations

// Updated products array with Athflex-inspired items from the image
const products = [
  {
    id: 1,
    name: "Dark Flex Oversize T-Shirt",
    price: "Rs. 1,299.00",
    image: "/assets/images/merch1.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    fit: "Regular Fit",
    category: "Limited Edition",
  },
  {
    id: 2,
    name: "Dark Flex Oversize T-Shirt",
    price: "Rs. 999.00",
    image: "/assets/images/merch2.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    fit: "Regular Fit",
    category: "Limited Edition",
  },
  {
    id: 3,
    name: "Dark Flex Oversize T-Shirt",
    price: "Rs. 1,999.00",
    image: "/assets/images/merch3.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    fit: "Relaxed Fit",
    category: "Limited Edition",
  },
  {
    id: 4,
    name: "Dark Flex Oversize T-Shirt",
    price: "Rs. 1,999.00",
    image: "/assets/images/merch4.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    fit: "Relaxed Fit",
    category: "Limited Edition",
  },
  {
    id: 5,
    name: "Gloves",
    price: "Rs. 499.00",
    image: "/assets/images/gloves.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    fit: "Relaxed Fit",
    category: "Limited Edition",
  },
  {
    id: 6,
    name: "Shorts",
    price: "Rs. 999.00",
    image: "/assets/images/shorts.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    fit: "Relaxed Fit",
    category: "Limited Edition",
  },
  {
    id: 7,
    name: "Bottle",
    price: "Rs. 499.00",
    image: "/assets/images/bottle.png",
    sizes: ["S", "M"],
    colors: ["Black"],
    fit: "Relaxed Fit",
    category: "Limited Edition",
  },
  {
    id: 8,
    name: "T-Shirts",
    price: "Rs. 599.00",
    image: "/assets/images/tshirts.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    fit: "Relaxed Fit",
    category: "Limited Edition",
  },
];

function Merchandise() {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

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
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section - Inspired by Athflex */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-6 text-green-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Merchandise Store
        </motion.h1>

        <p className="text-xl text-center text-gray-300 mb-12">
          Elevate your fitness journey with our premium, limited-edition gym wear designed for performance and style. Crafted for the Indian audience, our apparel combines innovation, durability, and a bold aesthetic to inspire change and transform your workouts.
        </p>

        {/* Vision & Mission Section - In Square Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="vision-mission-box bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">AthFlex Vision</h2>
              <p className="text-gray-700">
                More than just gym wear – We aim to revolutionize the market with unique, purposeful products. Inspiring Change – As a homegrown brand, we prove that humble beginnings can lead to industry transformation. Authenticity & Purpose – Our standard for success is built on innovation, inspiration, and meaningful creation in fitness apparel.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="vision-mission-box bg-gray-200 p-6 rounded-lg shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">AthFlex Mission</h2>
              <p className="text-gray-700">
                Next-Level Quality – Delivering premium gym wear at an affordable price, designed for the Indian audience and skin type. Resilience & Excellence – From humble beginnings to becoming a top pick in gym wear and fitness. Global Vision – Expanding beyond borders to inspire individuals worldwide on their fitness journey with AthFlex.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: product.id * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain mb-4 rounded-lg shadow-lg" // Proper shape and scaling
              />
              <h2 className="text-2xl font-semibold text-green-300">{product.name}</h2>
              <p className="text-lg text-gray-200 font-bold">{product.price}</p>
              <p className="text-gray-400 text-sm">{product.fit}</p>
              <p className="text-gray-400 text-sm">{product.category}</p>

              {product.sizes.length > 0 && (
                <div className="mt-2">
                  <label className="block text-gray-300">Select Size</label>
                  <select
                    className="mt-1 bg-gray-700 text-white p-2 rounded-md w-full"
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
                    className="mt-1 bg-gray-700 text-white p-2 rounded-md w-full"
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
            </motion.div>
          ))}
        </div>

        {/* Cart Section */}
        <motion.div
          className="cart-box text-center mt-12 p-6 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-2">Shopping Cart</h2>
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
        </motion.div>
      </div>
    </div>
  );
}

export default Merchandise;