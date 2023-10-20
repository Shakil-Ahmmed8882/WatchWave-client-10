import React from "react";

const ProPlanCard = () => {
  return (
    <div className="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 sm:p-8">
      <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
        <div>
          <h3 className="text-2xl font-semibold text-white jakarta sm:text-4xl">
            Pro Plan
          </h3>
        </div>
        <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20">
          Go Pro
        </span>
      </div>
      <div className="mb-4 space-x-2">
        <span className="text-4xl font-bold text-white">$15/mo</span>
        <span className="text-2xl text-indigo-100 line-through">$39/mo</span>
      </div>
      <ul className="mb-6 space-y-2 text-indigo-100">
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className=""> Unlimited API calls</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className=""></span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className=""> Advanced Project Settings</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className=""> Priority Support</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className=""> Free Scene</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className="">Unlimited API calls</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className="">Ad-Free Experience</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className="">Priority Support</span>
        </li>
        {/* Add filler content to match the card height */}
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className="">Additional Feature 1</span>
        </li>
        <li className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            {/* Icon */}
          </svg>
          <span className="">Additional Feature 2</span>
        </li>
      </ul>

      <a
        href="#"
        className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover-bg-opacity-30 md:text-base">
        Subscribe now
      </a>
      <p className="text-sm text-center text-gray-300 mt-3">
        Enjoy free movies and entertainment anytime, anywhere.
      </p>
    </div>
  );
};

export default ProPlanCard;
