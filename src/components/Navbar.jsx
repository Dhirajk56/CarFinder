import React, { useState } from "react";
import carlogo from "../assets/Images/image.png";
import SearchBar from "./SearchBar";
import { MoveRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="md:px-10 px-2  flex flex-col md:flex-row justify-around h-[12%] items-center bg-white w-full  ">
      <Link to="/" className="flex items-center  ">
        <img src={carlogo} alt="" className="h-15" />
        <h1 className="font-bold">CarFinder</h1>
      </Link>
      <div className="flex justify-between md:w-1/2 w-full gap-3">
        <SearchBar />
        <Link
          to="/wishlist"
          className="p-2 border-green-800 border-1   rounded-2xl text-white bg-blue-400 flex gap-2 font-bold text-sm items-center hover:scale-95 hover:bg-blue-500 transition-all ease-in-out duration-100"
        >
          WishList <MoveRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
