import React from "react";
import "./Left.css";

export default function Left() {
  return (
    <div className="left-dash">
      <div className="board-up">
        <h1 className="dash-heading">Board.</h1>
        <div className="dashboard-left">
          <img src="dashboard.png" alt="" className="dash-icon" />
          <p className="dash-caption">Dashboard</p>
        </div>
        <div className="trans-left">
          <img src="transaction.png" alt="" className="trans-icon" />
          <p className="trans-caption">Transactions</p>
        </div>
        <div className="schedules-left">
          <img src="schedule.png" alt="" className="schedules-icon" />
          <p className="schedules-caption">Schedules</p>
        </div>
        <div className="users-left">
          <img src="user.png" alt="" className="users-icon" />
          <p className="users-caption">Users</p>
        </div>
        <div className="settings-left">
          <img src="setting.png" alt="" className="settings-icon" />
          <p className="settings-caption">Settings</p>
        </div>
      </div>
      <div className="board-down">
        <p className="help-caption">Help</p>
        <p className="contact-us-caption">Contact Us</p>
      </div>
    </div>
  );
}
