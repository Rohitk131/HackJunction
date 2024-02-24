import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <nav className="flex flex-row items-center justify-between px-4 md:px-20 py-10">
        <div className="relative flex flex-row space-x-1 items-center">
          <div className="absolute h-6 w-4 bg-blue-500 transform -skew-x-12 z-10"></div>
          <div className="absolute top-0 left-1 h-6 w-4 bg-green-500 transform -skew-x-12"></div>
          <h1 className="pl-5 text-2xl font-bold italic text-gray-700 dark:text-gray-50">HackJunction</h1>
        </div>
        <div className="flex flex-row items-center space-x-8">
          <a
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Home
          </a>
          <a
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Hackathons
          </a>
          <a
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            How It Works
          </a>
          <a
            href="#"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Contact Us
          </a>
          <div className="relative px-8 py-2 border border-gray-800 rounded-3xl bg-white dark:border-gray-50">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border border-gray-800 dark:border-gray-50 px-8 py-2"
              style={{ zIndex: -10 }}
            ></div>
            <Link
              to="/signin" 
              className="relative text-gray-700 font-light hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
