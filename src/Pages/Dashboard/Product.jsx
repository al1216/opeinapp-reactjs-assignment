import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";

export default function Product() {
  let [prod1, setProd1] = useState([]);
  let [prod2, setProd2] = useState([]);
  let [prod3, setProd3] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        setProd1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => {
        setProd2(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => {
        setProd3(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const data = [
    { name: "Group A", value: prod2.length },
    { name: "Group B", value: prod1.length },
    { name: "Group C", value: prod3.length - 1 },
  ];
  const COLORS = ["#98D89E", "#EE8484", "#F6DC7D"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return <></>;
  };
  return (
    <div className="product-right">
      <div className="heading-filter">
        <div className="heading-products-right">
          <h1 className="product-heading-right">Top products</h1>
        </div>
        <div className="filter-right">
          <p className="month-year-right">May - June 2021</p>
          <img src="arrow.png" alt="" className="arrow-icon" />
        </div>
      </div>
      <div className="pie-legends">
        <div className="pie-graph">
          {/* <img src="pie.png" alt="" className="pie" /> */}
          <PieChart
            width={180}
            height={140}
            margin={{ top: -130, right: 5, bottom: 5, left: -120 }}
            
          >
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={62}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="pie-legends-caption-icon">
          <div className="legend1">
            <img src="green.png" alt="" className="green-circle" />
            <p className="caption-legend">Basic Tees</p>
          </div>
          <p className="legend-value">55%</p>
          <div className="legend2">
            <img src="yellow.png" alt="" className="yellow-circle" />
            <p className="caption-legend">Custom Short Pants</p>
          </div>
          <p className="legend-value">31%</p>
          <div className="legend3">
            <img src="pink.png" alt="" className="pink-circle" />
            <p className="caption-legend">Super Hoodies</p>
          </div>
          <p className="legend-value">14%</p>
        </div>
      </div>
    </div>
  );
}
