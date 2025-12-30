import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="mt-20 px-4 sm:px-10 max-w-6xl mx-auto">
      
      {/* ABOUT TITLE */}
      <div className="mb-14 text-center">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* ABOUT CONTENT */}
      <div className="flex flex-col sm:flex-row items-center gap-14">
        
        {/* IMAGE */}
        <div className="w-full sm:w-1/2">
          <img
            src={assets.about_img}
            alt="About us"
            className="rounded-xl shadow-sm"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-6 sm:w-1/2 text-gray-700 leading-relaxed">
          <p>
            We are a modern fashion and lifestyle brand focused on creating
            products that balance quality, comfort, and timeless design.
          </p>

          <p>
            Every item in our collection is thoughtfully curated using premium
            materials and practical craftsmanship, ensuring long-lasting value
            for everyday use.
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-4">
            Our Mission
          </h2>

          <p>
            Our mission is to make premium products accessible and reliable while
            delivering a shopping experience that feels simple, transparent,
            and customer-focused.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-4xl py-14 text-center">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        
        {/* CARD 1 */}
        <div className="border border-gray-200 hover:border-black px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-4">
          <b className="text-base">Quality Assurance</b>
          <p className="text-gray-600 leading-relaxed">
            Every product goes through strict quality checks to ensure durability,
            comfort, and consistency before reaching our customers.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="border border-gray-200 hover:border-black px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-4">
          <b className="text-base">Customer-First Approach</b>
          <p className="text-gray-600 leading-relaxed">
            We prioritize transparency, easy returns, and responsive support to
            make sure every customer feels confident and valued.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="border border-gray-200
        hover:border-black px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-4">
          <b className="text-base">Trusted Experience</b>
          <p className="text-gray-600 leading-relaxed">
            From browsing to delivery, we focus on creating a seamless and
            trustworthy experience at every step.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
