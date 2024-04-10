import React from "react";
import Navbar from "./Navbar";
import DashData from "./DashData";
import "./Gstyle.css"

const HomeDashboard = () => {
  return (
    <div className="Dash-Components">
      <div className="Dash-Lists">
        <Navbar />
      </div>
      <div className="Dash-List">
        <DashData />
      </div>
    </div>
  );
};

export default HomeDashboard;
