import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-pink-300 shadow-lg py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Coconut Exclusive on the right */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif text-black">
              Coconut Exclusive
            </Link>
          </div>
          {/* Navigation links on the left */}
          <div className="flex items-center space-x-6">
            {/* Home button */}
            <Link to="/" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Home</span>
              {/* Oval around button */}
              <span className="oval"></span>
            </Link>
            {/* Add Product button */}
            <Link to="/addproduct" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Add Product</span>
              {/* Oval around button */}
              <span className="oval"></span>
            </Link>
            <Link to="/productlist" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Remove Product</span>
              {/* Oval around button */}
              <span className="oval"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
