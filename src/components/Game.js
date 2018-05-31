import React, { Component } from 'react';
import Avocado from './Avocado';
import Upgrade from './upgrade/Upgrade';
import SpaceImage from './../images/space_factory.jpg';
import GMOImage from './../images/GMOFactory.jpg';
import FactoryImage from './../images/factory.jpg';
import FarmerImage from './../images/farmer.jpg';
import TreeImage from './../images/avocadotree.jpg';

export default class Game extends Component {

  state = {
    counter: 0,
    treeCost: 50,
    farmerCost: 100,
    factoryCost: 200,
    GMOCost: 400,
    spaceFactoryCost: 1000,
    amountOfTrees: 0,
    amountOfDoubleClickers: 0,
    amountOfFarmers: 0,
    amountOfFactories: 0,
    amountOfGMOFactories: 0,
    amountOfSpaceFactories: 0
  } 

  componentDidMount() {
    setInterval(this.incrementCounter, 100);
    setInterval(this.incrementTrees, 5000);
  }

  incrementCounter = () => {
    //Set counter to the amount of upgrades bought, to increment accordingly
    this.setState({
      counter: this.state.counter +
      // The counter will be added to every ten seconds
      (1 * this.state.amountOfTrees * (100/10000))
      // 8 avocados per second
      + (1 * this.state.amountOfFactories * (100/125))
      //16 avocados per second
      + (1 * this.state.amountOfGMOFactories * (100/62.5))
      //32 avocados per second
      + (1 * this.state.amountOfSpaceFactories * (100/31.25))
    });
  }

  incrementTrees = () => {
    this.setState({
      amountOfTrees: this.state.amountOfTrees + this.state.amountOfFarmers
    })
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  buyAvocadoTree = () => {
    this.setState({
      counter: this.state.counter - this.state.treeCost,
      treeCost: Math.floor(this.state.treeCost * 1.2),
      amountOfTrees: this.state.amountOfTrees + 1
    });
  }
  
  buyAvocadoFarmer = () => {
    this.setState({
      counter: this.state.counter - this.state.farmerCost,
      farmerCost: Math.floor(this.state.farmerCost * 1.3),
      amountOfFarmers: this.state.amountOfFarmers + 1
    });
  }

  buyAvocadoFactory = () => {
    this.setState({
      counter: this.state.counter - this.state.factoryCost,
      factoryCost: Math.floor(this.state.factoryCost * 1.4),
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

  buySpaceFactory = () => {
    this.setState({
      counter: this.state.counter - this.state.spaceFactoryCost,
      spaceFactoryCost: Math.floor(this.state.spaceFactoryCost * 1.6),
      amountOfSpaceFactories: this.state.amountOfSpaceFactories + 1
    });
  }

  render(){
    return(
      <React.Fragment>

        <div className="container wrapper">
          <div className="row">
          <Avocado  handleClick = { this.handleClick } 
            counter = { this.state.counter } />
            <div className="col-7">
           
              <Upgrade  Cost = { this.state.treeCost } 
                        handleClick = { this.buyAvocadoTree }
                        Amount = { this.state.amountOfTrees}
                        Counter = { this.state.counter}
                        Type = "avocado tree"
                        Description = "An avocado tree producing 1 avocado per 10 seconds"
                        Image = { TreeImage }
                        ProductionAmount = { this.state.amountOfTrees / 10 } />

              <Upgrade  Cost = { this.state.farmerCost }
                        handleClick = { this.buyAvocadoFarmer }
                        Amount = { this.state.amountOfFarmers }
                        Counter = { this.state.counter}
                        Type = "avocado farmer"
                        Description = "A farmer that plants a tree for you every 5 seconds"
                        Image = { FarmerImage }
                        ProductionAmount = { this.state.amountOfFarmers / 5 } />

              <Upgrade  Cost = { this.state.factoryCost }
                        handleClick = {this.buyAvocadoFactory}
                        Amount = { this.state.amountOfFactories }
                        Counter = { this.state.counter } 
                        Type = "avocado factory"
                        Description = "A factory that produces 8 avocados per second"
                        Image = { FactoryImage }
                        ProductionAmount = { this.state.amountOfFactories * 8 } />
          
              <Upgrade  Cost = { this.state.GMOCost }
                        handleClick = {this.buyGMOfactory}
                        Amount = { this.state.amountOfGMOFactories }
                        Counter = { this.state.counter } 
                        Type = "GMO factory"
                        Description = "A GMO factory that produces 16 avocados per second"
                        Image = { GMOImage }
                        ProductionAmount = { this.state.amountOfGMOFactories * 16 } />
          

              <Upgrade  Cost = { this.state.spaceFactoryCost }
                        handleClick = { this.buySpaceFactory }
                        Amount = { this.state.amountOfSpaceFactories }
                        Counter = { this.state.counter }
                        Type = "space factory"
                        Description = "Let aliens produce your avocados! 32 avocados per second"
                        Image = { SpaceImage }
                        ProductionAmount = { this.state.amountOfSpaceFactories * 32 } />
            </div>
            </div>
          </div>
        </React.Fragment>
      
    )
  }
}