import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      
      {/* Left line */}
      <span className="w-8 sm:w-12 h-[2px] bg-gray-300"></span>

      {/* Text */}
      <h2 className="text-lg sm:text-2xl font-medium tracking-wide text-gray-600">
        {text1}{" "}
        <span className="text-gray-900 font-semibold">
          {text2}
        </span>
      </h2>

      {/* Right line */}
      <span className="w-8 sm:w-12 h-[2px] bg-gray-300"></span>
    </div>
  );
};

export default Title;
