import React from 'react';
import TreeImage from './../images/avocadotree.png';
import Button from './Button';

export default function AvocadoTree({ Amount, Cost, handleClick, Class }){
  const amountOfAvocados = Amount / 10;
 
  return (
    <div className="upgrade">
      <p>A tree that produces 1 avocado per 10 seconds</p>
      <div className="upgrade-icon">
        <img src={TreeImage} alt="Avocado tree"/>
      </div>
      <Button className={ Class ? 'upgradeable': 'non-upgradeable' } 
              handleClick={ handleClick }>Buy avocado tree</Button>
      <p>Cost: { Cost }</p>
      <p>You own { Amount } avocado trees, producing { amountOfAvocados } avocados per second</p>
    </div>
  )
}