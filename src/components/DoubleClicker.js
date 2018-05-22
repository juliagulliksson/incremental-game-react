import React from 'react';
import Cursor from './../images/cursor.png';
import Button from './Button';

export default function DoubleClicker({ Class, Cost, Amount, handleClick }) {

  //const classes = Class ? 'upgradeable btn btn-primary': 'non-upgradeable btn btn-primary';
  return (
    <div className="double-clicker">
      <p>Generate twice the amount of clicks!</p>
      <div className="upgrade-icon">
        <img src={Cursor} alt="Cursor"/>
      </div>  
      <Button className = { Class ? 'upgradeable': 'non-upgradeable' } 
              onClick = { handleClick} >Buy double clicker</Button>
      <p>Cost: { Cost }</p>
      <p>You own { Amount } doubleclickers</p>
    </div>
  )
}

