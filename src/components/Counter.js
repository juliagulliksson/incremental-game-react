import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';
import AutoClicker from './AutoClicker';
import DoubleClicker from './DoubleClicker';

export default class Counter extends Component {

  state = {
    counter: 0,
    autoClickerUpgrade: false,
    amountOfAutoClickers: 0,
    autoClickerCost: 10,
    clickerCount: 1,
    amountOfDoubleClickers: 0,
    doubleClickerCost: 10,
    fps: 1000
  }

  componentDidMount() {
    setInterval(this.autoClicker, this.state.fps);
  }

  autoClicker = () => {
    this.setState({counter: this.state.counter + 1})
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
  }

  buyAutoClicker = () => {
    if(this.state.counter >= this.state.autoClickerCost){
      this.setState({
        counter: this.state.counter - this.state.autoClickerCost,
        amountOfDoubleClickers: this.state.amountOfDoubleClickers + 1,
        autoClickerCost: this.state.autoClickerCost * 2
      });
    }
  }

  buyDoubleClicker = () => {
    if(this.state.counter >= this.state.doubleClickerCost){
      this.setState({
        counter: this.state.counter - this.state.doubleClickerCost,
        clickerCount: this.state.clickerCount * 2,
        doubleClickerCost: this.state.doubleClickerCost * 2
      });
    }

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
          <div className="row">
              <div className="col-4 avocado-image-wrapper">
                <Avocado handleClick={this.incrementCounter} />
                <div className="counter">
                  <p>{ this.state.counter } </p>
                </div>
              </div>
            
              <div className="col-8">
                
                <AutoClicker className={autoClickerClass} Cost={this.state.autoClickerCost} 
                Amount={this.state.amountOfAutoClickers} handleClick={this.buyAutoClicker}/>
                <DoubleClicker Cost={this.state.doubleClickerCost} 
                handleClick={this.buyDoubleClicker} Amount={this.state.amountOfDoubleClickers}/>
              </div>
            </div>
        </div>
        {/*    <iframe id="guac" width="560" height="315" title="guacamole-song" 
          src="https://www.youtube.com/embed/JNsKvZo6MDs?start=10" frameBorder="0" 
          allow="autoplay; encrypted-media" allowFullScreen></iframe>  */}
          
        </div>
    )
  }
}