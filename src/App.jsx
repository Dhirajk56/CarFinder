import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Allcar from "./pages/Allcar";
import CarDetail from "./pages/CarDetail";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcar" element={<Allcar />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/allcar/:car/:cardetail" element={<CarDetail />} />
      </Routes>
    </div>
  );
};

export default App;
