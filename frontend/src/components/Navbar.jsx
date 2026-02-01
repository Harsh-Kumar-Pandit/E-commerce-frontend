import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowsearch,
    getCartCount,
    token,
    setToken,
    navigate,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCartItems({});
    navigate("/login");
  };

  const handleSearchClick = () => {
    setShowsearch(true);
  };

  <button onClick={handleSearchClick}>Search</button>;

  return (
    <div
      className="flex items-center justify-between py-5 px-4 sm:px-10
                    sticky top-0 z-50 bg-white border-b"
    >
      <Link to="/">
        <img src={assets.logo} className="w-40" alt="logo" />
      </Link>

      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        {["/", "/collection", "/about", "/contact"].map((path, index) => {
          const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
          return (
            <NavLink
              key={path}
              to={path}
              className="flex flex-col items-center gap-1"
            >
              <p>{labels[index]}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-600 hidden" />
            </NavLink>
          );
        })}
      </ul>

      <div className="flex items-center gap-6">
        <Link to="/collection">
          <img
            onClick={handleSearchClick}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search"
          />
        </Link>
        <div className="relative group">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="profile"
            />
          </Link>

          {/* Dropdown */}
          {token ?  <div className="absolute right-0 top-6 hidden group-hover:block">
            <div
              className="flex flex-col gap-2 w-36 py-3 px-5
                 bg-slate-100 text-gray-500 rounded shadow"
            >
              <p
  onClick={() => navigate("/profile")}
  className="cursor-pointer hover:text-black"
>
  My Profile
</p>

              <Link to='/orders'>
              <p className="cursor-pointer hover:text-black">Orders</p>
              </Link>
              <p onClick={logout} className="cursor-pointer hover:text-black">
                Logout
              </p>
            </div>
          </div>: ''}
         
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="cart" />
          <p
            className="absolute -right-2 -bottom-2 w-5 h-5 rounded-full
                        bg-black text-white text-xs flex items-center
                        justify-center"
          >
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu"
        />
      </div>

      {visible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[100%] max-w-sm bg-white z-50
          transform transition-transform duration-300 ease-in-out sm:hidden
          ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col text-gray-700">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4 border-b cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="back"
            />
            <p className="text-lg font-medium">Back</p>
          </div>
          {["/", "/collection", "/about", "/contact"].map((path, index) => {
            const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `flex justify-center py-4 text-sm tracking-widest
                   font-medium border-b transition
                   ${
                     isActive
                       ? "bg-black text-white"
                       : "text-gray-800 hover:bg-black hover:text-white"
                   }`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
