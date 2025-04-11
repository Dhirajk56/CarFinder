import React from "react";
import Carcard from "../components/Carcard";
import { data } from "../dummydata";
import { useLocation } from "react-router-dom";

const Allcar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search")?.toLowerCase() || "";

  const filteredCars = data.filter((car) =>
    [
      car.make,
      car.model,
      car.fuel_type,
      car.exterior_color,
      car.bodystyle,
    ].some((field) => field.toLowerCase().includes(search))
  );

  return (
    <div className="flex justify-center flex-wrap gap-5 md:px-10 h-full w-full mt-4 py-3 ">
      {filteredCars.length > 0 ? (
        filteredCars.map((car, index) => <Carcard key={index} car={car} />)
      ) : (
        <p>No cars found.</p>
      )}
    </div>
  );
};

export default Allcar;
