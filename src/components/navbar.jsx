import React from "react";
import { Link } from "react-router-dom"; 
import { mercedesImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px:5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
      <Link to="/">
          <img src={mercedesImg} alt="Mercedes Logo" width={24} height={24} />
        </Link>
        <div className="flex flex-1 justify-center ">
          {navLists.map((navItem) => (
            <Link key={navItem.name} to={navItem.path} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className="flex item-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
