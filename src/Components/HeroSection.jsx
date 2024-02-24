import React from 'react'
import { Link } from 'react-router-dom';
import "../index.css";
import Features from "./featues";
import FAQ from "./faq";
import Tests from './testimonials';

export default function LandingPageWithHero() {
  return (
    <main className="relative antialiased bg-white dark:bg-[#25292A] z-0 overflow-hidden">
      <div
        className="absolute hidden md:block -left-40 -top-40 text-gray-100 dark:text-gray-600"
        style={{ zIndex: -20 }}
      >
        <svg
          id="visual"
          viewBox="0 0 900 900"
          width="600"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(423.6017287294153 429.411998482734)">
            <path
              d="M164.8 -274.6C221 -253 278.9 -223.8 345.5 -176.7C412.1 -129.7 487.3 -64.8 476.3 -6.3C465.4 52.2 368.2 104.3 297.9 144.9C227.6 185.5 184.1 214.6 138.9 253C93.8 291.4 46.9 339.2 -6.9 351.1C-60.7 363.1 -121.3 339.2 -194.4 316.8C-267.4 294.5 -352.8 273.7 -394 221.2C-435.1 168.7 -432.1 84.3 -400.9 18C-369.7 -48.3 -310.4 -96.7 -267.6 -146.3C-224.8 -196 -198.4 -246.9 -156.5 -276.8C-114.7 -306.6 -57.3 -315.3 -1.5 -312.7C54.3 -310.1 108.7 -296.2 164.8 -274.6"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
      <nav className="flex flex-row items-center justify-between px-4 md:px-20 py-10">
        <div className="relative flex flex-row space-x-1 items-center">
          <div className="absolute h-6 w-4 bg-blue-500 transform -skew-x-12 z-10"></div>
          <div className="absolute top-0 left-1 h-6 w-4 bg-green-500 transform -skew-x-12"></div>
          <h1 className="pl-5 text-2xl font-bold italic text-gray-700 dark:text-gray-50">
            HackJunction
          </h1>
        </div>
        <div className="flex flex-row items-center space-x-8">
        <Link
            to="/"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/sponsors"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Sponsors
          </Link>
          <Link
            to="/venue"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Venue
          </Link>
          <Link
            to="/catering"
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            Catering
          </Link>
          <Link
            to='/about'
            className="hidden md:block font-semibold text-gray-500 hover:text-green-500 transition duration-100 dark:text-gray-200"
          >
            About Us
          </Link>
          <div className="relative px-8 py-2 border border-gray-800 rounded-3xl bg-white dark:border-gray-50">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border border-gray-800 dark:border-gray-50 px-8 py-2"
              style={{ zIndex: -10 }}
            ></div>
            <a
              href="#"
              className="relative text-gray-700 font-light hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      <header className="mt-4 md:mt-20 flex flex-col md:flex-row space-x-2 px-4 md:px-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50">
            Sparking Hackathon Innovation, Linking Innovators, Hosting the
            Future at{" "}
            <span className="font-thin tracking-wider">Your Fingertips.</span>
          </h1>
          <p className="my-10 text-gray-800 font-light max-w-xl dark:text-gray-200">
            Streamline your hackathon experience with our all-in-one platform,
            connecting organizers with sponsors, catering, and venues
            seamlessly.
          </p>
          <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
            <div
              className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2"
              style={{ zIndex: -10 }}
            ></div>
            <a
              href="#"
              className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1"
            >
              Create Account
            </a>
          </div>
        </div>

        <div
          className="hidden md:block w-full md:w-1/2"
          style={{ perspective: "800px" }}
        >
          <div
            className="img-container rounded-xl overflow-hidden p-2 bg-white transform shadow-2xl"
            style={{
              transform: "rotateX(40deg) rotateZ(6deg) rotateY(-10deg)",
            }}
          >
            <img
              className="rounded-lg"
              src="https://mir-s3-cdn-cf.behance.net/projects/max_808/f2696d167299601.Y3JvcCwzMzA3LDI1ODcsNzMsMA.png"
              alt="img-container"
            />
          </div>
        </div>
      </header>
      <Features />
      <section className="bg-[#25292A] py-16 rounded-xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Hackathon Stats</h2>
                    <p className="mt-2 text-sm text-gray-600">Explore some interesting statistics about our hackathons.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Participants</h3>
                            <p className="mt-1 text-sm text-gray-600">Over 1000 participants joined our hackathons.</p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                            <p className="mt-1 text-sm text-gray-600">More than 500 innovative projects were created.</p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Prizes</h3>
                            <p className="mt-1 text-sm text-gray-600">Distributed over $50,000 in prizes.</p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Sponsors</h3>
                            <p className="mt-1 text-sm text-gray-600">Partnered with 20+ leading tech companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <section className="pt-20 dark:bg-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 my-2 max-w-6xl mx-auto items-center mt-10">
          <div>
            <h1 className="text-4xl font-bold dark:text-gray-50 text-gray-700">
              Seamless and <span className="text-[#1a759f]">Hassle-free</span>{" "}
              registration for hackathons.
            </h1>
            <p className="my-8 dark:text-gray-200 text-gray-600">
            With the HackJunction platform, registering for hackathons has never been easier. 
            HackJunction provides a smooth and secure payment experience for hackathon enthusiasts.
            </p>
            <div className="relative px-8 py-2 border rounded-3xl bg-white cursor-pointer inline-block">
              <div
                className="absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2 dark:border-gray-50"
                style={{ zIndex: -10 }}
              ></div>
              <a
                href="#"
                className="relative text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1 dark:border-gray-50"
              >
                Refer Now
              </a>
            </div>
          </div>

          <div className="relative shadow-2xl p-2 bg-gray-400 rounded-md mt-8 md:mt-0">
            <img
              src="https://svgsilh.com/svg/26432.svg"
              className="absolute -right-10 opacity-5 -top-10 w-48 h-48 z-10"
              style={{ zIndex: 20 }}
              alt="hero"
            />

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-lg"
              alt="hero"
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="box-border max-w-6xl mx-auto md:masonry before:box-inherit after:box-inherit">
            <div className="px-8 py-2 my-2 rounded-lg break-inside">
              <img
                src="https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero here"
                className="rounded-lg"
              />
            </div>
            <div className="px-8 py-2 my-2 rounded-lg  break-inside">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*oJc6NYEyNl4SqrcS"
                alt="hero image"
                className="rounded-lg "
              />
            </div>
            <div className="px-8 py-2 my-6 rounded-lg break-inside">
              <img
                src="https://blog.csiro.au/wp-content/uploads/2016/04/Solar-Hackathon-winners.jpg"
                alt="hero here"
                className="rounded-lg"
              />
            </div>
            <div className="px-8 py-2 my-6 rounded-lg break-inside">
              <img
                src="https://www.researchgate.net/publication/343592585/figure/fig4/AS:1008195237597185@1617383884659/Customers-responses-on-the-hackathon-outcomes.ppm"
                alt="hero here"
                className="rounded-lg"
              />
            </div>
            <div className="px-8 py-2 my-2 rounded-lg break-inside">
              <img
                src="https://miro.medium.com/v2/resize:fit:960/1*XHcSc6bN4ZbW7OtgvEJoYg.png"
                alt="hero here"
                className="rounded-lg"
              />
            </div>
            <div className="px-8 py-2 my-6 rounded-lg break-inside">
              <img
                src="https://iotex.io/blog/content/images/2021/07/Hackathon-Sponsors.png"
                alt="hero here"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Tests/>
      <div>
        <FAQ />
      </div>
      <div className="py-6 flex flex-col justify-center sm:py-12 md:-mt-20 dark:bg-[#25292A]">
        <div className="h-90 rounded-xl p-4 m-2">
          <div className="md:flex justify-around px-10 py-8">
            <div className="py-5 md:py-0">
              <h4 className="font-bold text-green-500 mb-2 px-2">Explore</h4>
              <ul className="text-gray-600">
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Free tutorials
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Payments
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Referrals
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Open Source
                </li>
              </ul>
            </div>
            <div className="py-5 md:py-0">
              <h4 className="font-bold text-green-500 mb-2 px-2">Site</h4>
              <ul className="text-gray-600">
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  License
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Articles
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  About
                </li>
                <li className="py-2 cursor-pointer hover:border-purple-300 border border-transparent px-2 rounded-full">
                  Support
                </li>
              </ul>
            </div>
            <div className="py-5 md:py-0">
              <h4 className="font-bold text-green-500 mb-2 px-2">Follow Us</h4>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-between items-end px-12 md:px-32 py-8 text-gray-500">
            <div>Legal</div>
            <div>© 2021 AcePay. All Rights Reserved.</div>
            <div className="hidden md:block">
              <p className="font-bold tracking-tighter text-xl">1384</p>
              <p>Cr. funds transferred</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
