import React from 'react';
import Button from './../elements/Button';
import UpgradeImage from './UpgradeImage';
import PropTypes from 'prop-types';
import UpgradeCountainer from './UpgradeCountainer';

function correctEndString(string, amount) {
  let correctEnding;
  if(string.endsWith("y")){
    correctEnding = (amount > 1 || amount === 0) ? 'ies' :  'y';
    string = string.substring(0, string.length - 1) + correctEnding; 
    return string;
  } else if (string.endsWith("e") || string.endsWith("er")) {
    correctEnding = (amount > 1 || amount === 0) ? 's' :  '';
    string = string + correctEnding;
    return string;
  }
}

function Upgrade({  Amount, Cost, handleClick, Counter, Type, 
                    Description, Image, ProductionAmount }){

  let upgradeType = correctEndString(Type, Amount);
  
  return (
    <UpgradeCountainer>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <UpgradeImage Source={ Image } Alt={ Type }/>
            <Button className={ (Counter >= Cost) ? 'upgradeable': 'non-upgradeable' } 
                    handleClick={ handleClick }>Buy {Type}</Button>
            <p>Cost: { Cost }</p>
          </div>
          <div className="col-6">
            <p>{ Description }</p>
            <p>{ Amount } { upgradeType },
            {(Type === "avocado farmer") ? " planting " : " producing "} 
            { ProductionAmount }
            {(Type === "avocado farmer") ? " trees " : " avocados "} per second</p>
          </div>
        </div>
      </div>
    </UpgradeCountainer>
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