import React from 'react';
import Left from './Left';
import Right from './Right';
import './style.css';

export default function Index() {
  return (
    <div className="main-container">
        <Left></Left>
        <Right></Right>
    </div>
  )
}
