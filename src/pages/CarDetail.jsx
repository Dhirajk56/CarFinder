import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../dummydata";
import { MoveLeftIcon } from "lucide-react";
const CarDetail = () => {
  const { cardetail } = useParams();
  const [carinfo, setCarinfo] = useState([]);
  const [remove, setRemove] = useState(false);

  const HandleWishList = (id) => {
    const existing = JSON.parse(localStorage.getItem("carid")) || [];

    if (!remove) {
      // Add only if not already there
      if (!existing.includes(id)) {
        localStorage.setItem("carid", JSON.stringify([...existing, id]));
      }
      setRemove(true);
    } else {
      // Remove it if already there
      const updated = existing.filter((carId) => carId !== id);
      localStorage.setItem("carid", JSON.stringify(updated));
      setRemove(false);
    }
  };

  useEffect(() => {
    // Find the car from dummy data using its ID
    const selectedCar = data.find((item) => item.id === cardetail);
    const existing = JSON.parse(localStorage.getItem("carid")) || [];
    setRemove(existing.includes(cardetail));
    setCarinfo(selectedCar);
  }, [cardetail]);
  return (
    <div className="relative md:px-10  flex  md:justify-around md:items-center h-screen px-4 ">
      <Link
        to="/allcar"
        className="absolute hidden top-[7%] left-[5%] text-2xl font-bold border-1 rounded-xl px-2 py-1 md:flex items-center gap-3 hover:border-2 cursor-pointer hover:scale-95"
      >
        <MoveLeftIcon />
        back
      </Link>
      <div className="flex space-x-28 flex-col md:flex-row mt-20 md:mt-0">
        <div className="mb-5">
          <img
            src={carinfo.image}
            alt={carinfo.make}
            className="w-full max-w-md rounded-xl"
          />
          <h1 className="text-3xl font-bold mt-4">
            {carinfo.make} {carinfo.model}
          </h1>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="space-y-2 md:text-3xl font-semibold text-2xl">
            <p>
              Car Name:{" "}
              <span className="text-2xl text-gray-500">{carinfo.make}</span>
            </p>
            <p>
              Model:{" "}
              <span className="text-2xl text-gray-500"> {carinfo.model}</span>
            </p>
            <p>
              Fuel Type:{" "}
              <span className="text-2xl text-gray-500">
                {carinfo.fuel_type}{" "}
              </span>
            </p>
            <p>
              Exterior color:{" "}
              <span className="text-2xl text-gray-500">
                {carinfo.exterior_color}{" "}
              </span>
            </p>
            <p>
              Interior color:{" "}
              <span className="text-2xl text-gray-500">
                {carinfo.interior_color}{" "}
              </span>
            </p>
            <p>
              year:{" "}
              <span className="text-2xl text-gray-500">{carinfo.year} </span>
            </p>
            <p>
              Price:
              <span className="text-2xl text-gray-500">
                ${carinfo.price}
              </span>{" "}
            </p>
          </div>
          <button
            className={`font-bold text-2xl border-1 p-2 w-full rounded-2xl ${
              remove
                ? "bg-red-500 hover:bg-red-600"
                : " bg-amber-400 hover:bg-amber-500"
            } hover:scale-95 transition-all ease-in-out duration-100`}
            onClick={() => HandleWishList(carinfo.id)}
          >
            {" "}
            {remove ? "Remove From Wishlist" : "Add To Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
