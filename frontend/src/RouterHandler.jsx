import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
// import Admin from "./admin/Admin";
import DashBoard from "./dash/DashBoard";
import Owner from "./owner/Owner";

const RouterHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<DashBoard />} />
      <Route path="/owner" element={<Owner />} />
    </Routes>
  );
};

export default RouterHandler;
