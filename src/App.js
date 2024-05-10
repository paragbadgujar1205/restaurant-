import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "./component/Home";
import Booking from "./component/Booking.jsx";
import Resturant from "./component/Resturant";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Resturant />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
};

export default App;
