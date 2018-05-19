import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';
import AutoClicker from './AutoClicker';

export default class Counter extends Component {

  state = {
    counter: 0,
    autoClickerUpgrade: false,
    amountOfAutoClickers: 0,
    clickerCount: 1
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + this.state.clickerCount });
    
    if(this.state.counter >= 9){
      this.setState({
        autoClickerUpgrade: true,
      });
    } else {
      this.setState({
        autoClickerUpgrade: false,
      });
    }
   
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
        autoClickerUpgrade: true,
        amountOfAutoClickers: this.state.amountOfAutoClickers + 1
      });
    }
  }

  buyDoubleClicker = () => {
    this.setState({
      clickerCount: this.state.clickerCount * 2
    });
  }  
  render(){


    let autoClickerClass = "";
    if(this.state.autoClickerUpgrade){
      autoClickerClass = "upgradeable";
    } else {
      autoClickerClass = "non-upgradeable";
    }

   /*  if(this.state.autoClickerUpgrade){
      setTimeout(() => {
        this.setState({counter: this.state.counter + 1})
      }, 1000);
    } */
    
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
          <AutoClicker className={autoClickerClass} Cost="10" 
          Amount={this.state.amountOfAutoClickers} handleClick={this.buyAutoClicker}/>

          <button onClick= {this.buyDoubleClicker}>Buy Double clicker</button>

          {/* <iframe id="guac" width="560" height="315" title="guacamole-song" 
          src="https://www.youtube.com/embed/JNsKvZo6MDs?start=10" frameBorder="0" 
          allow="autoplay; encrypted-media" allowFullScreen></iframe> */}
          
        </div>
    )
  }
}