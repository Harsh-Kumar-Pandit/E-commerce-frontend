import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center items-center py-24 px-4">
      <div className="absolute text-center max-w-2xl w-full">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 
                       animate-fade-in"
        >
          Subscribe now & get <span className="font-bold">20% off</span>
        </h2>

        {/* Sub text */}
        <p className="text-gray-500 mb-8 animate-fade-in-delay">
        Receive product updates, announcements, and exclusive information
          directly in your inbox. We send emails only when necessary.

        </p>

        {/* Form */}
        <form
          onSubmit={onSubmitHandler}
          className="flex items-center justify-center max-w-xl mx-auto 
                          border border-gray-300 overflow-hidden 
                          transition-shadow duration-300 
                          hover:shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 text-sm outline-none"
            required
          />

          <button
            type="submit"
            className="px-8 py-4 bg-black text-white text-sm font-medium
                       hover:bg-gray-800 transition-all duration-300
                       active:scale-95"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBox;
