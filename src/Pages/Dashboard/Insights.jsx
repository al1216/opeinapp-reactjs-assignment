import React from 'react'
import './Insights.css';

export default function Insights() {
  return (
    <div className="insights-right">
        <div className="box1">
            <div className="box-left">
                <p className="caption-name">Total Revenues</p>
                <h1 className="caption-value">$2,129,430</h1>
            </div>
            <div className="box-right">
                <img src="revenue.png" alt="" className="caption-icon" />
            </div>
        </div>
        <div className="box2">
            <div className="box-left">
                <p className="caption-name">Total Transactions</p>
                <h1 className="caption-value">1,520</h1>
            </div>
            <div className="box-right">
                <img src="total_transactions.png" alt="" className="caption-icon" />
            </div>
        </div>
        <div className="box3">
            <div className="box-left">
                <p className="caption-name">Total Likes</p>
                <h1 className="caption-value">9,721</h1>
            </div>
            <div className="box-right">
                <img src="upvote.png" alt="" className="caption-icon" />
            </div>
        </div>
        <div className="box4">
            <div className="box-left">
                <p className="caption-name">Total Users</p>
                <h1 className="caption-value">892</h1>
            </div>
            <div className="box-right">
                <img src="users2.png" alt="" className="caption-icon" />
            </div>
        </div>
    </div>
  )
}
