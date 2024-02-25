import React, { useState } from 'react';
import Navbar from './Navbar';
import { TERipple } from 'tw-elements-react';
import data from '../static_utils/venue.json';

const Venue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(city =>
    city.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-[#25292A] h-full text-white'>
      <Navbar/>
      <header>
        <h1 className='w-fit mx-auto text-7xl my-10 font-bold tracking-tighter'>Find a Venue</h1>
        <div className="mb-3 md:w-96 mx-auto">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Enter your City"
              aria-label="Search"
              aria-describedby="button-addon1"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <TERipple color='light'>
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-green-800"
                type="button"
                id="button-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
              </button>
            </TERipple>
          </div>
        </div>
      </header>
      <section className='w-fit mx-auto grid grid-rows-1 md:grid-rows-3'>
        {filteredData.map((city) => (
          <div className='mx-24' key={city.title}>
            {city.colleges.map((college, index) => (
              <div key={index} className="m-5">
                 <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              {city.title}
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {college.name}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {college.description}
              </p>
                <button
                  type="button"
                  className="inline-block rounded p-3 px-10 text-sm font-medium  bg-[#1b1e1f] hover:bg-black cursor-pointer">
                  Book Now
                </button>
            </div>
          </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Venue;
