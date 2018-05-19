import React from 'react';

export default function AutoClicker ({ className, Amount, Cost, handleClick }) { 
  const classes = `${className} btn btn-primary`;
  return (
    <div className="auto-clicker">
      <button className={classes} onClick={handleClick}>Buy autoclicker</button>
      <p>Cost: {Cost}</p>
      <p>You own {Amount} autoclickers</p>
    </div>
  )
}