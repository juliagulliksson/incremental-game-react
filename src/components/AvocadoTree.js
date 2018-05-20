//import React from 'react';
import React, { Component } from 'react';
import TreeImage from './../images/avocadotree.png';
/* 
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
} */

export default class AvocadoTree extends Component{

  state = {
    clickable: false,
    amount: 0,
    classNames: 'non-upgradeable btn btn-primary'
  }

  addTree = () => {
    this.setState({
      amount: this.state.amount + 1
    })
  }

  toggleClass = (bool) => {
    if(bool){
      this.setState({classNames: 'upgradeable btn btn-primary' })
    } else {
      this.setState(prevState => ({
        classNames: prevState.classNames
      }));
    }
  }



  render(){

  /*   let toggleClickable = this.props.Clickable

    let clickableClass = this.state.clickable ? 'upgradeable': 'non-upgradeable';
    let classes = 'btn btn-primary';
    classes = classes + clickableClass; */


    return (
      <div className="upgrade">
        <p>A tree that produces 1 avocado per 10 seconds</p>
        <div className="upgrade-icon">
          <img src={TreeImage} />
        </div>
        <button className={this.props.available ? 'upgradeable': 'non-upgradeable'} onClick={() => {
          this.props.handleClick();
          this.addTree();
          }}>Buy avocado tree</button>
        <p>Cost: {this.props.Cost}</p>
        <p>You own {this.state.amount} avocado trees, producing  avocados per second</p>
      </div>
    )
  }

}