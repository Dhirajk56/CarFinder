import React, { useEffect, useState } from "react";
import { data } from "../dummydata";
import Carcard from "../components/Carcard";
const Wishlist = () => {
  const [wishlistCars, setWishlistCars] = useState([]);
  useEffect(() => {
    const carid = JSON.parse(localStorage.getItem("carid")) || [];
    const filteredCars = data.filter((car) => carid.includes(car.id));
    setWishlistCars(filteredCars);
  }, []);

  return (
    <div className="md:px-10 h-full w-full mt-4 py-3 px-5  ">
      <h1 className="font-bold text-2xl mb-10">WishList </h1>
      <div className="flex  flex-wrap  gap-5">
        {wishlistCars.length > 0 ? (
          wishlistCars.map((car, index) => <Carcard key={index} car={car} />)
        ) : (
          <p className="text-4xl ">No cars Added to Wishlist .</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
