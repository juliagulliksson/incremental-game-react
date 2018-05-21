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
    amountOwned: 0,
    cost: 10,
    classes: 'non-upgradeable btn btn-primary'
  }

  componentDidMount(){
    if(this.props.counter >= this.state.cost){
      this.setState({classes: 'upgradeable btn btn-primary'})
    } else {
      this.setState((prevState) => {classes: prevState.classes})
    }
  }

  addTree = () => {
    this.setState({
      amountOwned: this.state.amountOwned + 1
    })
  }

 /*  handleClick = () => {
     if(this.props.counter >= this.state.cost){
      this.setState({classes: 'upgradeable btn btn-primary'})
    } else {
      this.setState((prevState) => {classes: prevState.classes})
    } 
  } */

  render(){

    const classes = `${this.props.class} btn btn-primary`;
    return (
      <div className="upgrade">
        <p>A tree that produces 1 avocado per 10 seconds</p>
        <div className="upgrade-icon">
          <img src={TreeImage} />
        </div>
        <button className={classes} onClick={() => {
          this.props.handleClick();
          this.addTree();
          }}>Buy avocado tree</button>
        <p>Cost: {this.state.cost}</p>
        <p>You own {this.state.amount} avocado trees, producing  avocados per second</p>
      </div>
    )
  }

}