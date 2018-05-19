import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';

export default class Counter extends Component {

  state = {
    counter: 0,
    incrementCounterUpgrade: false,
    amountOfAutoClickers: 0
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
   
    this.checkCounter();
  }

  checkCounter = () => {
    console.log(this.state.counter)
    if(this.state.counter >= 9){
      console.log("100!");
    }
  }

  buyAutoClicker = () => {
    if(this.state.counter >= 9){
      this.setState({
        counter: this.state.counter - 10,
        incrementCounterUpgrade: true,
        amountOfAutoClickers: this.state.amountOfAutoClickers + 1
      });
    }
  }
  
  render(){

    if(this.state.incrementCounterUpgrade){
      setTimeout(() => {
        this.setState({counter: this.state.counter + 1})
      }, 1000);
    }
    
    return(
        <div>
        
          <div className="container">
            <div className="col-4 avocado-image-wrapper">
              <Avocado handleClick={this.incrementCounter} />
            </div>
          </div>
          
          <div className="counter">
          <p>{ this.state.counter } </p>
          </div>
          
        {/*   <Upgrade handleClick={this.buyAutoClicker} 
          amount={this.state.amountOfAutoClickers} /> */}

          {/* <iframe id="guac" width="560" height="315" title="guacamole-song" 
          src="https://www.youtube.com/embed/JNsKvZo6MDs?start=10" frameBorder="0" 
          allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
          
        </div>
    )
  }
}