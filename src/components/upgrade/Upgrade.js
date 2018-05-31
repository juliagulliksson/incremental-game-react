import React from 'react';
import Button from './../elements/Button';
import UpgradeImage from './UpgradeImage';
import PropTypes from 'prop-types';
import UpgradeCountainer from './UpgradeCountainer';
import AvocadoIcon from './../../images/avo-icon.png';

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
    <UpgradeCountainer >
      <div className={(Counter >= Cost) ? 'upgradeable row': 'non-upgradeable row'} 
      onClick={handleClick}>
        <div className="col-5">
            <UpgradeImage Source={ Image } Alt={ Type }/>
            {/* <Button className={ (Counter >= Cost) ? 'upgradeable': 'non-upgradeable' } 
                    handleClick={ handleClick }>Buy {Type}</Button> */}
            
        </div>
        <div className="col-7 upgrade-description">
          <p>{ Description }</p>
          <p> <span className="green">{ Amount } </span> { upgradeType },
          {(Type === "avocado farmer") ? " planting " : " producing "} 
          <span className="green">{ ProductionAmount }</span>
          {(Type === "avocado farmer") ? " trees " : " avocados "} per second</p>
          <div className="cost-wrapper">
              <p className="cost"><span className={(Counter >= Cost) ? 'green': 'red'}>
              { Cost }</span></p>
              <div className="cost-icon">
                <img src={AvocadoIcon} alt="avocado icon" />
              </div>
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