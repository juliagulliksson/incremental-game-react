import React from 'react';
import AvocadoTree from './../images/avocadotree.png';

export default function AutoClicker ({ className, Amount, Cost, handleClick }) { 
  const classes = `${className} btn btn-primary`;
  return (
    <div className="auto-clicker">
      <p>A tree that produces 1 avocado per second</p>
      <div className="upgrade-icon">
        <img src={AvocadoTree} />
      </div>
      <button className={classes} onClick={handleClick}>Buy avocado tree</button>
      <p>Cost: {Cost}</p>
      <p>You own {Amount} avocado trees</p>
    </div>
  )
}