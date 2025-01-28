import { useState } from "react"
import { LOGO_URL } from "../utils/contants";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
      <header className="flex items-center justify-between p-2 white-bg shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={LOGO_URL}
            alt="Swiggy Logo"
            className="w-24 rounded-md"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-white p-2 rounded-full w-1/3">
          <input
            placeholder="Search for restaurants, cuisines, or dishes"
            className="flex-1 p-2 text-sm  border outline outline-offset-2 rounded-full focus:outline-none"
          />
          <button
            className="p-2 border  outline outline-offset-2 text-white rounded-full bg-orange-400 hover:bg-red-500"
          >
            Search
          </button>
        </div>

        {/* Navigation Links */}
        
        {/* Account/Cart icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="./assets/cart.png"
              alt="Cart"
              className="w-7 h-7 cursor-pointer"
            />
            <p className="cursor-pointer">Cart</p>
          </div>
          <div className="flex items-center space-x-2">
          <img
            src="./assets/profile.png"
            alt="Profile"
            className="w-7 h-7 cursor-pointer"
          />
          <p className="cursor-pointer">Profile</p>
          </div>
        </div>
      </header>
  );
};
