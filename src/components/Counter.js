import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';
import AvocadoTree from './upgrades/Tree';
import DoubleClicker from './upgrades/DoubleClicker';
import AvocadoFarmer from './upgrades/Farmer';
import AvocadoFactory from './upgrades/Factory';
import GMOFactory from './upgrades/GMOFactory';

export default class Counter extends Component {

  state = {
    counter: 0,
    treeUpgrade: false,
    doubleClickerUpgrade: false,
    farmerUpgrade: false,
    factoryUpgrade: false,
    GMOUpgrade: false,
    treeCost: 10,
    farmerCost: 15,
    factoryCost: 15,
    GMOCost: 15,
    doubleClickerCost: 10,
    doubleClickCount: 0,
    amountOfTrees: 0,
    amountOfDoubleClickers: 0,
    amountOfFarmers: 0,
    amountOfFactories: 0,
    amountOfGMOFactories: 0
  } 

  componentDidMount() {
    setInterval(() => {
      this.incrementCounter();
      this.checkUpgradeAvailability();
    }, 100);
  }

  /* handleClick = () => {
    this.setState(previousState => {
      return { click: previousState.click }

    })
  } */

  checkUpgradeAvailability = () => {
    
    if(this.state.counter >= this.state.doubleClickerCost){
      this.setState({ doubleClickerUpgrade: true });
    } else {
      this.setState({ doubleClickerUpgrade: false });
    }

    if(this.state.counter >= this.state.treeCost){
      this.setState({ treeUpgrade: true });
    } else {
      this.setState({ treeUpgrade: false });
    } 

    if(this.state.counter >= this.state.farmerCost){
      this.setState({ farmerUpgrade: true });
    } else {
      this.setState({ farmerUpgrade: false });
    }

    if(this.state.counter >= this.state.factoryCost){
      this.setState({ factoryUpgrade: true });
    } else {
      this.setState({ factoryUpgrade: false});
    }

    if(this.state.counter >= this.state.GMOCost){
      this.setState({ GMOUpgrade: true });
    } else {
      this.setState({ GMOUpgrade: false });
    }
  }

  incrementCounter = () => {
    //Set counter to the amount of upgrades bought, to increment accordingly
    this.setState({
      counter: this.state.counter +
      // The counter will be added to every ten seconds, thereof the / 10000
      (1 * this.state.amountOfTrees * (100/10000))
      // The counter will update every second, to render 1 avocado/second
      + (1 * this.state.amountOfFarmers * (100/1000))
      // 8 avocados per second
      + (1 * this.state.amountOfFactories * (100/125))
      //16 avocados per second
      + (1 * this.state.amountOfGMOFactories * (100/62.5))
      /*+ 32 avocados per second(1 * this.state.spaceFactories * (100/31.25))  */
    });
  }

  handleClick = () => {
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
  
  buyAvocadoFarmer = () => {
    this.setState({
      counter: this.state.counter - this.state.farmerCost,
      farmerCost: Math.floor(this.state.farmerCost * 1.5),
      amountOfFarmers: this.state.amountOfFarmers + 1
    });
  }

  buyAvocadoFactory = () => {
    this.setState({
      counter: this.state.counter - this.state.factoryCost,
      factoryCost: Math.floor(this.state.factoryCost * 1.5),
      amountOfFactories: this.state.amountOfFactories + 1
    });
  }

  buyGMOfactory = () => {
    this.setState({
      counter: this.state.counter - this.state.GMOCost,
      GMOCost: Math.floor(this.state.GMOCost * 1.5),
      amountOfGMOFactories: this.state.amountOfGMOFactories + 1
    });
  }

  render(){
    return(

      <div className="container">
        <div className="row">
          
          <Avocado  handleClick={ this.handleClick } 
                    counter={this.state.counter} />
          
          <div className="col-8">
          
            <AvocadoTree  Class = { this.state.treeUpgrade } 
                          Cost = { this.state.treeCost } 
                          handleClick = { this.buyAvocadoTree }
                          Amount = { this.state.amountOfTrees} />

            <DoubleClicker  Cost = { this.state.doubleClickerCost } 
                            handleClick = { this.buyDoubleClicker }
                            Class = { this.state.doubleClickerUpgrade }
                            Amount = { this.state.amountOfDoubleClickers } />

            <AvocadoFarmer  Cost = { this.state.farmerCost }
                            handleClick = { this.buyAvocadoFarmer }
                            Class = { this.state.farmerUpgrade }
                            Amount = { this.state.amountOfFarmers } />

            <AvocadoFactory Cost = { this.state.factoryCost }
                            handleClick = {this.buyAvocadoFactory}
                            Class = { this.state.factoryUpgrade }
                            Amount = { this.state.amountOfFactories } />

            <GMOFactory Cost = { this.state.GMOCost }
                        handleClick = {this.buyGMOfactory}
                        Class = { this.state.GMOUpgrade }
                        Amount = { this.state.amountOfGMOFactories }/>
          </div>
        </div>
      </div>
    )
  }
}