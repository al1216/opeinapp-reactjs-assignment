import React from "react";
import "./Activites.css";

export default function Activites() {
  return (
    <div className="activites-right">
      <h1 className="activities-heading">Activities</h1>
      <div className="filter-legend">
        <div className="filter-left">
          <p className="month-year">May - June 2021</p>
          <img src="arrow.png" alt="" className="arrow-icon" />
        </div>
        <div className="legend-right">
          <div className="guest">
            <img src="pink.png" alt="" className="pink-circle" />
            <p className="legend-name">Guest</p>
          </div>
          <div className="user">
            <img src="green.png" alt="" className="green-circle" />
            <p className="legend-name">User</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
