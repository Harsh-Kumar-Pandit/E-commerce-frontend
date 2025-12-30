import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowsearch } =
    useContext(ShopContext);
  const location = useLocation();

  const isCollectionPage = location.pathname.includes("collection");
  useEffect(() => {
    
    if (!isCollectionPage) {
      setShowsearch(false);
      setSearch("");
    }
  }, [isCollectionPage, setShowsearch, setSearch]);

  if (!showSearch || !isCollectionPage) return null;

  return (
    <div className="border-t border-b bg-gradient-to-b from-gray-50 to-white py-6">
      <div className="max-w-3xl mx-auto flex items-center gap-3 px-4">

        {/* SEARCH INPUT */}
        <div className="flex flex-1 items-center gap-3 px-5 py-3 rounded-full bg-white shadow-md ring-1 ring-gray-200 focus-within:ring-black transition-all duration-200">
          <img
            src={assets.search_icon}
            alt=""
            className="w-4 opacity-60"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products…"
            className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
          />
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShowsearch(false)}
          className="p-3 rounded-full bg-white shadow-md ring-1 ring-gray-200 hover:bg-gray-100 transition"
          aria-label="Close search"
        >
          <img src={assets.cross_icon} alt="" className="w-3" />
        </button>

      </div>
    </div>
  );
};

export default SearchBar;
