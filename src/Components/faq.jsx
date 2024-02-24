import React from "react";
export default function faq() {
  return (
    <>
      <div className="py-20 dark:bg-[#25292A] mb-10">
        <h1 className="text-4xl text-center text-gray-700 dark:text-gray-50 font-extrabold">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-40 mx-4 mt-20">
          <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500 ">
            <h2 className="text-md font-semibold">
              How do I create a hackathon event on your platform?
            </h2>
            <p className="text-sm mt-4 font-light leading-6">
              To create a hackathon event, simply sign up for an account,
              navigate to the "Create Event" section, and follow the
              step-by-step instructions to set up your event details, including
              date, location, and any specific requirements.
            </p>
          </div>
          <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500">
            <h2 className="text-md font-semibold">
              What type of organizations can host hackathons on your platform?
            </h2>
            <p className="text-sm mt-4 font-light leading-6">
              Our platform is open to a wide range of organizations, including
              businesses, educational institutions, non-profits, and community
              groups. Whether you're a large corporation or a small startup, you
              can host a hackathon event tailored to your needs.
            </p>
          </div>
          <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500">
            <h2 className="text-md font-semibold">
              How can I attract sponsors for my hackathon event?
            </h2>
            <p className="text-sm mt-4 font-light leading-6">
              Our platform offers tools and resources to help you attract
              sponsors for your hackathon event. You can create customizable
              sponsorship packages, showcase your event's unique features and
              benefits, and reach out to potential sponsors through our network.
            </p>
          </div>
          <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500">
            <h2 className="text-md font-semibold">
              Do you provide catering services for hackathon events?
            </h2>
            <p className="text-sm mt-4 font-light leading-6">
              Yes, we offer catering services for hackathon events hosted on our
              platform. You can choose from a variety of catering options,
              including snacks, meals, and beverages, to ensure your
              participants are well-fed and energized throughout the event.
            </p>
          </div>

          <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500">
            <h2 className="text-md font-semibold">
              Can I find venues for hosting hackathons through your platform?
            </h2>
            <p className="text-sm mt-4 font-light leading-6">
              Absolutely! Our platform allows you to search and book venues for
              hosting hackathon events. You can browse through a curated list of
              venues, compare prices and amenities, and book the perfect venue
              that meets your event requirements.
            </p>
          </div>

          <div className="text-gray-800 dark:text-gray-50 bg-gray-100 dark:bg-gray-700 rounded-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500">
            <h2 className="text-md font-semibold">
              Do you offer technical support during hackathon events?
            </h2>
            <p className="text-sm mt-4 font-light leading-6">
              Yes, we provide technical support during hackathon events hosted
              on our platform. Our dedicated support team is available to assist
              you with any technical issues or questions you may encounter
              before, during, or after the event.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
