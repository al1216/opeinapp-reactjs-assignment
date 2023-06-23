import React from "react";
import "./Schedule.css";

export default function Schedule() {
  return (
    <div className="schedule-right">
      <div className="schedule-seall">
        <h1 className="schedule-heading">Today’s schedule</h1>
        <p className="seall-caption">See All {">"} </p>
      </div>
      <div className="schedule1">
        <div className="vertical-line1"></div>
        <div className="meeting-details">
          <p className="meeting-name">Meeting with suppliers from Kuta Bali</p>
          <p className="meeting-time">14.00-15.00</p>
          <p className="meeting-venue">at Sunset Road, Kuta, Bali</p>
        </div>
      </div>
      <div className="schedule2">
        <div className="vertical-line2"></div>
        <div className="meeting-details">
          <p className="meeting-name">Check operation at Giga Factory 1</p>
          <p className="meeting-time">18.00-20.00</p>
          <p className="meeting-venue">at Central Jakarta </p>
        </div>
      </div>
    </div>
  );
}
