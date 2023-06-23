import React from 'react'
import './Right.css';
import Navigation from './Navigation';
import Insights from './Insights';
import Activites from './Activites';
import Product from './Product';
import Schedule from './Schedule';

export default function Right() {
  return (
    <div className="right-dash">
        <Navigation></Navigation>
        <Insights></Insights>
        <Activites></Activites>
        <div className="product-schedule">
            <Product></Product>
            <Schedule></Schedule>
        </div>
    </div>
  )
}
