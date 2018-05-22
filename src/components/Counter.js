import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';
import AvocadoTree from './Tree';
import DoubleClicker from './DoubleClicker';

export default class Counter extends Component {

  state = {
    counter: 0,
    treeUpgrade: false,
    doubleClickerUpgrade: false,
    treeCost: 10,
    doubleClickCount: 0,
    doubleClickerCost: 10,
    fps: 100,
    autoClickerInterval: 1,
    incrementClickerInterval: 0,
    amountOfTrees: 0,
    amountOfDoubleClickers: 0,
    amountOfFarmers: 0
  } 

  componentDidMount() {
    setInterval(() => {
      this.incrementClicker();
      this.checkClasses();
    }, this.state.fps);

  }

  /* handleClick = () => {
    this.setState(previousState => {
      return { click: previousState.click }

    })
  } */

  checkClasses = () => {
    if(this.state.counter >= this.state.doubleClickerCost){
      this.setState({
        doubleClickerUpgrade: true,
      });
    } else {
      this.setState({
        doubleClickerUpgrade: false,
      });
    } 
    if(this.state.counter >= this.state.treeCost){
      this.setState({
        treeUpgrade: true,
      });
    } else {
      this.setState({
        treeUpgrade: false,
      });
    } 
  }

  incrementClicker = () => {
    //Set counter to the amount of upgrades bought to increment accordingly
    this.setState({
      counter: this.state.counter +
      //In this case the fps will count every ten seconds, thereof the / 10000
      (this.state.autoClickerInterval * this.state.amountOfTrees * (this.state.fps/10000))
      + //In the other cases it will update every second
      (this.state.autoClickerInterval * this.state.amountOfFarmers * (this.state.fps/1000))
    /*   + (this.state.autoClickerInterval * this.state.amountOfFarms * (this.state.fps/1000))
      + (this.state.autoClickerInterval * this.state.amountOfFarms * (this.state.fps/1000))
      + (this.state.autoClickerInterval * this.state.amountOfGMOFarms * (this.state.fps/1000))  */
    })
  }

  incrementCounter = () => {
    if (this.state.doubleClickCount > 0){
      this.setState({ counter: this.state.counter + this.state.doubleClickCount });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }
 
  checkCounter = () => {
    console.log(this.state.treeUpgrade, this.state.doubleClickerUpgrade)
  }

  buyAvocadoTree = () => {
    if(this.state.counter >= this.state.treeCost){
      this.setState({
        counter: this.state.counter - this.state.treeCost,
        treeCost: Math.floor(this.state.treeCost * 1.5),
        amountOfTrees: this.state.amountOfTrees + 1
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
  
 /*  buyAvocadoFarmer = () => {
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
  } */

  render(){
    return(

        <div className="container">
          <div className="row">
            
            <Avocado  handleClick={ this.incrementCounter } 
                      counter={this.state.counter} />
            
            <div className="col-8">
            
              <AvocadoTree  Class = { this.state.treeUpgrade } 
                            Cost = { this.state.treeCost } 
                            handleClick = { this.buyAvocadoTree }
                            Amount = { this.state.amountOfTrees}
                            />
              <DoubleClicker  Cost={ this.state.doubleClickerCost } 
                              handleClick={ this.buyDoubleClicker }
                              Class={this.state.doubleClickerUpgrade}
                              Amount = {this.state.amountOfDoubleClickers}
                              />

              {/*  <button onClick={this.buyAvocadoFarmer}>Buy Avocado farmer</button>
              <button onClick={this.buyAvocadoFarm}>Buy Avocado farm</button>
              <button onClick={this.buyGMOfactory}>Buy GMO Factory</button> */}
            </div>

          </div>
        </div>      
    )
  }
}