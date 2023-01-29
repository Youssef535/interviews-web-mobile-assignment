import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Get from "./Get";

const NavRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="Create" element={<Create />} />
    <Route path="Get" element={<Get />} />
  </Routes>
);

export default NavRoutes;
