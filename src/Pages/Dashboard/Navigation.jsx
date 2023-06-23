import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="right-nav">
      <h1 className="right-dash-heading">Dashboard</h1>
      <div className="input-note-avatar">
        <input
          type="text"
          name="search"
          className="search-input"
          placeholder="Search..."
        />
        <img src="notification.png" alt="" className="notification-icon" />
        <img src="avatar.png" alt="" className="avatar" />
      </div>
    </div>
  );
}
