import React from "react";
import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import SideBer from "../Pages/Dashboard/SideBer/SideBer";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayOut = () => {
  return (
    <div>
      <Header />
      <div className="sm:flex">
        <SideBer />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayOut;
