import React, { Component } from 'react';
import TreeImage from './../images/avocadotree.png';

export default class AvocadoTree extends Component{

  state = {
    amountOwned: 0,
  }

  checkClass = () => {

    if (this.props.Counter - this.props.Cost <= this.props.Cost) {
      console.log("lower")
      
    } else {
      console.log("higher")
    }
  }

  addTree = () => {
    this.setState({
      amountOwned: this.state.amountOwned + 1
    });
    this.checkClass();
  }

  render(){
  const classes = `${this.props.Class} btn btn-primary`
  const amount = this.state.amountOwned / 10;

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
        <p>Cost: {this.props.Cost}</p>
        <p>You own {this.state.amountOwned} avocado trees, producing {amount} avocados per second</p>
      </div>
    )
  }
 

}