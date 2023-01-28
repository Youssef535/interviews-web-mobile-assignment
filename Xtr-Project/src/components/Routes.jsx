import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Get from "./Get";
import Update from "./Update";

const NavRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="Create" element={<Create />} />
    <Route path="Get" element={<Get />} />
    <Route path="Update" element={<Update />} />
  </Routes>
);

export default NavRoutes;
