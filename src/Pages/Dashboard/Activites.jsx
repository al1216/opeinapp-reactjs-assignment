import React, { useState, useEffect } from "react";
import "./Activites.css";
import axios from "axios";
import { LineChart, Line, YAxis, CartesianGrid } from "recharts";

export default function Activites() {
  let [prod, setProd] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
      <div className="line-chart">
            <LineChart
              width={1100}
              height={250}
              data={prod}
              margin={{
                top: 15,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#E9A0A0"
                // activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="rating.count" stroke="#9BDD7C" />
            </LineChart>
          </div>
    </div>
  );
}
