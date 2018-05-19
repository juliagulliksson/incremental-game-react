import React from 'react';
import Cursor from './../images/cursor.png';

export default function DoubleClicker({ handleClick, className, Amount, Cost }){
  const classes = `${className} btn btn-primary`;
  return (
    <div className="auto-clicker">
      <p>Generate twice the amount of clicks!</p>
      <div className="upgrade-icon">
        <img src={Cursor} />
      </div>
      <button className={classes} onClick= {handleClick}>Buy Double clicker</button>
      <p>Cost: {Cost}</p>
      <p>You own {Amount} doubleclickers</p>
    </div>
  )
}