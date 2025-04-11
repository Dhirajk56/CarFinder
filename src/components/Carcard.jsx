import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carcard = ({ car }) => {
  return (
    <Link
      to={`/allcar/${car.make}/${car.id}`}
      className="flex hover:scale-105 transition-all ease-in-out duration-100 md:w-[20%] w-[40%] "
    >
      <div className="h-[100%]">
        <img src={car.image} alt="" className="rounded-xl" />
        <p className="font-bold">
          {car.make} {car.model}
        </p>
      </div>
    </Link>
  );
};

export default Carcard;
