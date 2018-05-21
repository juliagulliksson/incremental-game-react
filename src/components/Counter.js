import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';
import AvocadoTree from './AvocadoTree';
import DoubleClicker from './DoubleClicker';

export default class Counter extends Component {

  state = {
    counter: 0,
    autoClickerUpgrade: false,
    doubleClickerUpgrade: false,
    amountOfAutoClickers: 0,
    autoClickerCost: 10,
    doubleClickCount: 0,
    amountOfDoubleClickers: 0,
    doubleClickerCost: 10,
    autoClickerfps: 10000,
    fps: 1000,
    autoClickerInterval: 0,
    incrementClickerInterval: 0
  } 

  componentDidMount() {
    setInterval(this.autoClicker, this.state.autoClickerfps);
    setInterval(this.incrementclicker, this.state.fps);
  }

 

  autoClicker = () => {
    this.setState({counter: this.state.counter + this.state.autoClickerInterval})
  }

  incrementclicker = () => {
    this.setState({counter: this.state.counter + this.state.incrementClickerInterval})
  }

  incrementCounter = () => {
    console.log(this.state.fps)
    if(this.state.doubleClickCount > 0){
      this.setState({ counter: this.state.counter + this.state.doubleClickCount });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
 
   
     if(this.state.counter >= this.state.doubleClickerCost - 1){
      this.setState({
        doubleClickerUpgrade: true,
      });
    } else {
      this.setState({
        doubleClickerUpgrade: false,
      });
    } 

    if(this.state.counter >= this.state.autoClickerCost - 1){
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
   /*  console.log(this.state.counter)
    console.log(this.state.doubleClickCount) */
    console.log(this.state.autoClickerUpgrade)
  }

  buyAvocadoTree = () => {
    if(this.state.counter >= this.state.autoClickerCost){
      this.setState({
        counter: this.state.counter - this.state.autoClickerCost,
        amountOfAutoClickers: this.state.amountOfAutoClickers + 1,
        autoClickerCost: Math.floor(this.state.autoClickerCost * 1.5),
        autoClickerInterval: this.state.autoClickerInterval + 1
      });
    }
  }

  buyDoubleClicker = () => {
    if(this.state.counter >= this.state.doubleClickerCost){
      this.setState({
        counter: this.state.counter - this.state.doubleClickerCost,
        doubleClickCount: this.state.doubleClickCount + 2,
        doubleClickerCost: Math.floor(this.state.doubleClickerCost * 1.5),
        amountOfDoubleClickers: this.state.amountOfDoubleClickers + 1
      });
    }
  } 
  
  buyAvocadoFarmer = () => {
    this.setState({
      counter: this.state.counter - 40,
      incrementClickerInterval: this.state.incrementClickerInterval + 1
    });
  }

  buyAvocadoFarm = () => {
    this.setState({
      counter: this.state.counter - 40,
      incrementClickerInterval: this.state.incrementClickerInterval + 8
    });
  }

  buyGMOfactory = () => {
    this.setState({
      counter: this.state.counter - 40,
      incrementClickerInterval: this.state.incrementClickerInterval + 40
    });
  }

  render(){
   
    /* let autoClickerClass = "";
    if(this.state.autoClickerUpgrade){
      autoClickerClass = "upgradeable";
    } else {
      autoClickerClass = "non-upgradeable";
    } */

   /*  if(this.state.autoClickerUpgrade){
      setTimeout(() => {
        this.setState({counter: this.state.counter + 1})
      }, 1000);
    } */
    return(
          <div className="container">
            <div className="row">
              
              <Avocado  handleClick={ this.incrementCounter } 
                        counter={this.state.counter} />
            
              <div className="col-8">
              
                <AvocadoTree  class={ this.state.autoClickerUpgrade ? 'upgradeable': 'non-upgradeable' } 
                              Cost={ this.state.autoClickerCost } 
                              Amount={ this.state.amountOfAutoClickers } 
                              handleClick={ this.buyAvocadoTree }
                              counter={this.state.counter}/>
                <DoubleClicker  Cost={ this.state.doubleClickerCost } 
                                handleClick={ this.buyDoubleClicker } 
                                Amount={ this.state.amountOfDoubleClickers }
                                class={this.state.doubleClickerUpgrade ? 'upgradeable': 'non-upgradeable'}/>

                <button onClick={this.buyAvocadoFarmer}>Buy Avocado farmer</button>
                <button onClick={this.buyAvocadoFarm}>Buy Avocado farm</button>
                <button onClick={this.buyGMOfactory}>Buy GMO Factory</button>
              </div>

            </div>
          </div>
      
          
    )
  }
}