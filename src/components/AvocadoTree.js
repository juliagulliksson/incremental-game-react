import React from 'react';
import TreeImage from './../images/avocadotree.png';

export default function AutoClicker ({ className, Amount, Cost, handleClick }) { 
  const classes = `${className} btn btn-primary`;
  let productionRate = Amount / 10;
  return (
    <div className="auto-clicker">
      <p>A tree that produces 1 avocado per 10 seconds</p>
      <div className="upgrade-icon">
        <img src={TreeImage} />
      </div>
      <button className={classes} onClick={handleClick}>Buy avocado tree</button>
      <p>Cost: {Cost}</p>
      <p>You own {Amount} avocado trees, producing {productionRate} avocados per second</p>
    </div>
  )
}