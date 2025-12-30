import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div className="mt-20 px-4 sm:px-10 max-w-6xl mx-auto
                    animate-[fadeIn_0.8s_ease-out]">

      {/* TITLE */}
      <div className="mb-14 text-center">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">

        {/* LEFT IMAGE */}
        <div
          className="w-full lg:w-1/2 overflow-hidden
                     animate-[slideUp_0.9s_ease-out]"
        >
          <img
            src={assets.contact_img}
            alt="Contact"
            className="w-full object-cover
                       transition-transform duration-[1200ms]
                       hover:scale-[1.03]"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 text-gray-700">

          {/* STORE INFO */}
          <div
            className="animate-[fadeIn_1s_ease-out]"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Our Store
            </h2>

            <p className="leading-relaxed">
              54709 Willms Station<br />
              Suite 350, Washington, USA
            </p>

            <p className="mt-4">
              <span className="font-medium text-gray-900">Tel:</span>{" "}
              (415) 555-0132
            </p>

            <p>
              <span className="font-medium text-gray-900">Email:</span>{" "}
              admin@forever.com
            </p>
          </div>

          {/* CAREERS */}
          <div
            className="animate-[fadeIn_1s_ease-out]"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Careers at Forever
            </h2>

            <p className="leading-relaxed mb-6">
              Learn more about our teams and current job openings.
            </p>

            <button
              className="border border-black px-6 py-2 text-sm
                         transition-all duration-300
                         hover:bg-black hover:text-white
                         hover:translate-y-[-1px]
                         active:translate-y-[0px]"
            >
              Explore Jobs
            </button>
          </div>
         
        </div>
      </div>

       <div className="w-full lg:w-3/4">

          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Get in touch
          </h2>

          <form className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 px-4 py-2.5 rounded
                         outline-none focus:border-black transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 px-4 py-2.5 rounded
                         outline-none focus:border-black transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-300 px-4 py-2.5 rounded
                         outline-none focus:border-black resize-none transition"
            />

            <button
              type="submit"
              className='mt-2 py-3 text-sm font-medium
                transition-all duration-300
                bg-gray-400 cursor-not-allowed
                hover:bg-black hover:text-white
              '>
             Submit
            </button>
       
          </form>
        </div>
    </div>
  );
};

export default Contact;
