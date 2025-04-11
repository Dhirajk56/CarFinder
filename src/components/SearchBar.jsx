import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ widthsize }) => {
  const [userinput, setUserinput] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (userinput.trim()) {
      navigate(`/allcar?search=${encodeURIComponent(userinput)}`);
    }
  };
  return (
    <div className="flex gap-2">
      <div
        className={` flex rounded-2xl items-center ${widthsize} hover:border-2 border-1 px-1 bg-white transition-all ease-in-out duration-150`}
      >
        <input
          type="text"
          className="  h-full p-2  w-full bg-white outline-none border-none focus:outline-none focus:border-none rounded-2xl "
          placeholder="find your cars here"
          value={userinput}
          onChange={(e) => setUserinput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Search className="" />
      </div>
      <button
        className="border-1 p-1 rounded-2xl text-sm font-semibold hover:scale-95 bg-amber-300 hover:bg-amber-400 transition-all ease-in-out duration-100"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
