import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({current}) => {
  return (
    <div className={`${current == "home" ? "bg-transparent" : "bg-[#1b1e1f]"}`}>
      <nav className="flex flex-row items-center justify-between px-4 md:px-20 py-10">
        <Link to="/">
          <div className="relative flex flex-row space-x-1 items-center cursor-pointer">
            <div className="absolute h-6 w-4 bg-blue-500 transform -skew-x-12 z-10"></div>
            <div className="absolute top-0 left-1 h-6 w-4 bg-green-500 transform -skew-x-12"></div>
            <h1 className="pl-5 text-2xl font-bold italic text-gray-700 dark:text-gray-50">HackJunction</h1>
          </div></Link>
        <div className="flex flex-row items-center space-x-8">
          <Link
            to="/"
            className={`block font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 ${current=="home" ? "bg-white text-gray-900" : "text-gray-200"}`}
          >
            Home
          </Link>
          <Link
            to="/hackathons"
            className={`block font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 ${current=="hackathons" ? "bg-white text-gray-900" : "text-gray-200"}`}
          >
            Hackathons
          </Link>
          <Link
            to="/sponsors"
            className={`block font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 ${current=="sponsors" ? "bg-white text-gray-900" : "text-gray-200"}`}
          >
            Sponsors
          </Link>
          <Link
            to="/venue"
            className={`block font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 ${current=="venue" ? "bg-white text-gray-900" : "text-gray-200"}`}
          >
            Venue
          </Link>
          <Link
            to="/catering"
            className={`block font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 ${current=="catering" ? "bg-white text-gray-900" : "text-gray-200"}`}
          >
            Catering
          </Link>
          <Link
            to='/judges&mentors'
            className={`block font-semibold hover:text-green-500 transition py-1 px-3 rounded-lg duration-100 ${current=="judges" ? "bg-white text-gray-900" : "text-gray-200"}`}
          >
            Judges / Mentors
          </Link>
          <div className="relative px-8 py-2 border border-gray-800 rounded-3xl bg-white dark:border-gray-50">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border border-gray-800 dark:border-gray-50 px-8 py-2"
              style={{ zIndex: -10 }}
            ></div>
            <Link to="/signin" className="relative text-gray-700 font-light hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1">
              <a
                href="#"
                className="relative font-bold text-gray-700 hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
              >
                Login</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
