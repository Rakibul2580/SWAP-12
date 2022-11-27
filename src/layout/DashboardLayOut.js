import React from "react";
import { Outlet } from "react-router-dom";
import SideBer from "../Pages/Dashboard/SideBer/SideBer";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayOut = () => {
  return (
    <div>
      <Header />
      <SideBer />
      <Outlet />
    </div>
  );
};

export default DashboardLayOut;
