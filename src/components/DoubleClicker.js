import React from 'react';
import Cursor from './../images/cursor.png';
import Button from './Button';
import PropTypes from 'prop-types';

export default function DoubleClicker({ Class, Cost, Amount, handleClick }) {

  return (
    <div className="double-clicker">
      <p>Generate twice the amount of clicks!</p>
      <div className="upgrade-icon">
        <img src={Cursor} alt="Cursor"/>
      </div>  
      <Button className = { Class ? 'upgradeable': 'non-upgradeable' } 
              handleClick = { handleClick} >Buy double clicker</Button>
      <p>Cost: { Cost }</p>
      <p>You own { Amount } doubleclickers</p>
    </div>
  )
}

DoubleClicker.propTypes = {
  Class: PropTypes.bool.isRequired,
  Cost: PropTypes.number.isRequired,
  Amount: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}