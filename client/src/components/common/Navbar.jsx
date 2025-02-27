import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              BILVINE'S ENERGYM<span className="text-blue-600">!</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">HOME</Link>
              <Link to="/merchandise" className="px-3 py-2 text-gray-700 hover:text-blue-600">Merchandise</Link>
              <Link to="/shop" className="px-3 py-2 text-gray-700 hover:text-blue-600">Shop</Link>
              <Link to="/support" className="px-3 py-2 text-gray-700 hover:text-blue-600">Support</Link>
            </div>
          </div>
          <div>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;