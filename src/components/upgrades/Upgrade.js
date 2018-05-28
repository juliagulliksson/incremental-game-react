import React from 'react';
import Button from './../Button';
import UpgradeImage from './../UpgradeImage';
import PropTypes from 'prop-types';

function Upgrade({ Amount, Cost, handleClick, Counter, Type, Description, Image, ProduceAmount }){
 
  let correctEndString;
  if(Type.endsWith("y")){
    correctEndString = (Amount > 1 || Amount === 0) ? 'ies' :  '';
    Type = Type + correctEndString;
  } else if (Type.endsWith("s")) {
    correctEndString = (Amount > 1 || Amount === 0) ? 's' :  '';
    Type  = Type + correctEndString;
  }

  return (
    <div className="upgrade">
      <p>{ Description }</p>
      <UpgradeImage Source={ Image } Alt="Tree"/>
      <Button className={ (Counter >= Cost) ? 'upgradeable': 'non-upgradeable' } 
              handleClick={ handleClick }>Buy avocado tree</Button>
      <p>Cost: { Cost }</p>
      <p>You own { Amount } { Type }, 
      producing { ProduceAmount } avocados per second</p>
    </div>
  )
}

export default Upgrade;

Upgrade.propTypes = {
  Cost: PropTypes.number.isRequired,
  Amount: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  Counter: PropTypes.number.isRequired,
  Type: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired
}