import React from "react";
import "./Product.css";

export default function Product() {
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
            <img src="pie.png" alt="" className="pie" />
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
