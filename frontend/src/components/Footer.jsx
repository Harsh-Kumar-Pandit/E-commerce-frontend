import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
            <Link to='/'>
            <img src={assets.logo} alt="logo" className="w-36 mb-4" />
            </Link>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover premium fashion, timeless designs, and everyday essentials
            crafted for comfort and style.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            COMPANY
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/collection" className="hover:text-black">Collection</Link></li>
            <li><Link to="/about" className="hover:text-black">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            HELP
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Shipping</li>
            <li className="hover:text-black cursor-pointer">Returns</li>
            <li className="hover:text-black cursor-pointer">FAQ</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            CONTACT
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Email: support@yourstore.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Mon – Sat: 9AM – 6PM</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
