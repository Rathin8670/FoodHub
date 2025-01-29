import { useState } from "react"
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [searchText,setSearchText]=useState("")

  return (
      <>
      <div className="flex items-center justify-between p-2 white-bg shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={'/'}>
          <img src={LOGO_URL} className="w-24 rounded-md"/>
          </Link> 
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-white p-2 rounded-full w-1/3">
          <input
            placeholder="Search for restaurants, cuisines, or dishes"
            className="flex-1 p-2 text-sm  border outline outline-offset-2 rounded-full focus:outline-none"
            value={searchText}
            onChange={(e)=> setSearchText(e.target.value)}
          />

          <button
            className="p-2 border cursor-pointer  outline outline-offset-2 text-white rounded-full bg-orange-400 hover:bg-red-500"
            onClick={()=>{
              //need to filter the data
              
            }}
          >
            Search
          </button>
        </div>

        {/* Navigation Links */}

        <ul className="flex items-center space-x-4">
          <li className="text-gray-900"><Link to={'/about'}>About</Link></li>
          <li className="text-gray-900"><Link to={'/contact'}>Contact Us</Link></li>
        </ul>

        {/* Account/Cart icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Link to={'/cart'}><img src="./assets/cart.png" alt="Cart"className="w-7 h-7 cursor-pointer"/>
            </Link>
            <p className="cursor-pointer"><Link to={'/cart'}>Cart</Link></p>
          </div>

          <div className="flex items-center space-x-2">
          <Link to={'/profile'}><img src="./assets/profile.png" alt="Profile"    className="w-7 h-7 cursor-pointer"/>
          </Link>
          <p className="cursor-pointer"><Link to={'/profile'}>Profile</Link></p>
          </div>
        </div>
      </div>
      </>
  );
};
