import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-pink-300 shadow-lg py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-serif text-black">
              Coconut Exclusive
            </a>
          </div>
          {/* Search bar */}
          <div className="relative">
            {/* <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 bg-gray-800 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
            />
            <button className="absolute right-0 top-0 mt-3 mr-4">
              {/* Search icon 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l4-4m0 0l-4-4m4 4H4"
                />
              </svg>
            </button> */}
          </div>
          {/* Navigation links */}
          <div className="flex items-center space-x-6">
            {/* About button */}

            <Link to={'/searchgender'} >
                <Button>
                <div className="text-lg font-medium text-black hover:text-blue-900 relative">Gender</div>
                </Button>
                </Link>
                <Link to={'/searchname'} >
                <Button>
                <div className="text-lg font-medium text-black hover:text-blue-900 relative">Name</div>
                </Button>
                </Link>
            
            {/* <a href="#" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Search</span>
              {/* Oval around button 
              <span className="oval"></span>
            </a> */}
            {/* Categories button */}
            <a href="#" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Categories</span>
              {/* Oval around button */}
              <span className="oval"></span>
            </a>
            {/* Contact button */}
            {/* <a href="#" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Contact</span>
              {/* Oval around button 
              <span className="oval"></span>
            </a> */}
            {/* Login button */}
            <a href="/login" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Login</span>
              {/* Oval around button */}
              <span className="oval"></span>
            </a>
            <a href="/cart" className="text-lg font-medium text-black hover:text-blue-900 relative">
              <span>Cart</span>
              {/* Oval around button */}
              <span className="oval"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// {/* <div className="relative"> */}
//               <a href="#" className="text-lg font-medium text-black hover:text-blue-900 relative">
//                 // {/* Cart icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-gray-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 15l3 3m0 0l3-3m-3 3V9m0 6h6M5 21a2 2 0 01-2-2h2a2 2 0 012 2zm14-2a2 2 0 100-4 2 2 0 000 4z"
//                   />
//                 </svg>
//                 {/* Oval around button */}
//                 <span className="oval"></span>
//               </a>
//               {/* Cart counter */}
//               {/* <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-semibold"> */}
//                  {/* Replace with actual cart count */}
//               {/* </div>  */}