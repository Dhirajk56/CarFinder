import React from "react";
import carlogo from "../assets/Images/image.png";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
const Home = () => {
  return (
    <div className="h-screen mt-4  md:px-10 bg-blue-200 flex flex-col-reverse md:flex-row justify-center items-center gap-10  ">
      <div className="  w-[80%] md:w-[50%] flex flex-col  items-center gap-10 ">
        <h1 className="md:text-6xl text-3xl font-bold ">Find Your Car Now</h1>
        <SearchBar widthsize=" w-[100%]" />
        <Link
          to="/allcar"
          className="p-2 border-1 rounded-2xl bg-amber-400 flex gap-2 font-bold text-sm items-center hover:scale-95 hover:bg-amber-300 transition-all ease-in-out duration-100"
        >
          Explore All Cars <MoveRight className="text-white font-bold" />
        </Link>
      </div>
      <img src={carlogo} alt="" className="md:w-[30%] w-[50%] rounded-full " />
    </div>
  );
};

export default Home;
