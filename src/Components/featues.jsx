import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="pt-16 dark:bg-[#25292A]">
      <div className="header">
        <h1 className="text-4xl font-extrabold text-center text-black dark:text-white">
          We've got you <span className="text-tmk-blue">covered.</span>
        </h1>
        <p className="w-full px-4 mx-auto my-4 font-light text-center text-black dark:text-white md:w-1/2 lg:w-1/3">
          Our platform offers a comprehensive suite of features tailored to
          optimize your event planning. From seamless sponsor connections to
          streamlined catering services, we've got everything you need for a
          successful hackathon.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:mx-10 mt-6 text-center md:grid-cols-2 lg:grid-cols-3">
        {/* First */}
        <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
          <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-white to-blue-500 p-8">
          <div
              className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-100"
              style={{ zIndex: -10 }}
            ></div>
            <img
              src="./hackathon.png"
              alt="Description of your image"
              className="h-10 w-10"
            />
          </div>
          <div className="text-black text-box dark:text-white">
            <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
              Hackathon Hosting
            </h1>
            <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
              Seamlessly create and manage hackathon events, empowering
              organizers to foster innovation and collaboration effortlessly.
            </p>
          </div>
        </div>
        {/* Second */}
        <Link to="/sponsors"><div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
          <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-7">
            <div
              className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-red-500"
              style={{ zIndex: -10 }}
            ></div>
            <img
              src="./sponsor.png"
              alt="Description of your image"
              className="h-10 w-10"
            />
          </div>

         <div className="text-black text-box dark:text-white">
            <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
              Sponsorship Solutions
            </h1>
            <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
              Streamlined sponsorship opportunities facilitate connections
              between organizers and sponsors, fueling hackathon initiatives
              with vital support.
            </p>
          </div>
        </div></Link>
        {/* Third*/}
        <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
          <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8">
          <div
              className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-gray-700"
              style={{ zIndex: -10 }}
            ></div>
            <img
              src="./food-trolley.png"
              alt="Description of your image"
              className="h-10 w-10"
            />
          </div>
          <div className="text-black text-box dark:text-white">
            <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
              Catering Coordination
            </h1>
            <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
              Simplified catering services integration ensures organizers access
              convenient and diverse culinary options for hackathon
              participants.
            </p>
          </div>
        </div>
        {/* Fourth */}
        <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
          <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-red-400 to-yellow-500 p-8">
          <div
              className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-500"
              style={{ zIndex: -10 }}
            ></div>
            <img
              src="./location.png"
              alt="Description of your image"
              className="h-10 w-10"
            />
          </div>
          <div className="text-black text-box dark:text-white">
            <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
              Venue Selection
            </h1>
            <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
              Effortlessly find and book suitable venues for hackathons,
              providing organizers with accessible and conducive spaces for
              productive collaboration.
            </p>
          </div>
        </div>
        {/* Fifth */}
        <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
          <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6  bg-gradient-to-r from-pink-500 via-red-400 to-red-500 p-8">
          <div
              className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-500"
              style={{ zIndex: -10 }}
            ></div>
            <img
              src="./people.png"
              alt="Description of your image"
              className="h-10 w-10"
            />
          </div>
          <div className="text-black text-box dark:text-white">
            <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
              Community Engagement
            </h1>
            <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
              Foster a vibrant community of creators and innovators,
              facilitating networking, idea exchange, and collaboration beyond
              hackathon events.
            </p>
          </div>
        </div>
        {/* Sixth*/}
        <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
          <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-green-100 to-lime-400 p-8">
          <div
              className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-gray-300"
              style={{ zIndex: -10 }}
            ></div>
            <img
              src="./innovation.png"
              alt="Description of your image"
              className="h-10 w-10"
            />
          </div>
          <div className="text-black text-box dark:text-white">
            <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">
              Innovation Catalyst
            </h1>
            <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
              Our platform serves as a catalyst for innovation, empowering
              organizers to host successful hackathons that drive impactful
              solutions and ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
