import React, {Component} from 'react';
import Cursor from './../images/cursor.png';

export default class DoubleClicker extends Component {

  state = {
    amountOwned: 0
  }

  addDoubleClicker = () => {
    this.setState({
      amountOwned: this.state.amountOwned + 1
    })
  }

  render(){

    const classes = `${this.props.class} btn btn-primary`;
    return (
      <div className="double-clicker">
        <p>Generate twice the amount of clicks!</p>
        <div className="upgrade-icon">
          <img src={Cursor} />
        </div>  
        <button className={classes} onClick= { () =>  {
          this.props.handleClick();
          this.addDoubleClicker();
          }}>Buy Double clicker</button>
        <p>Cost: {this.props.Cost}</p>
        <p>You own {this.state.amountOwned} doubleclickers</p>
      </div>
    )
  }
}
