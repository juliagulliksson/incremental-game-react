import React, { Component } from 'react';
import Avocado from './Avocado';
import Upgrade from './upgrades/Upgrade';
import UpgradeCountainer from './UpgradeCountainer';
import SpaceImage from './../images/space_factory.jpg';
import GMOImage from './../images/GMOFactory.jpg';
import FactoryImage from './../images/factory.png';
import FarmerImage from './../images/farmer.png';
import TreeImage from './../images/avocadotree.png';

export default class Counter extends Component {

  state = {
    counter: 0,
    treeCost: 10,
    farmerCost: 15,
    factoryCost: 15,
    GMOCost: 15,
    spaceFactoryCost: 10,
    amountOfTrees: 0,
    amountOfDoubleClickers: 0,
    amountOfFarmers: 0,
    amountOfFactories: 0,
    amountOfGMOFactories: 0,
    amountOfSpaceFactories: 0
  } 

  componentDidMount() {
    setInterval(this.incrementCounter, 100);
  }

  /* handleClick = () => {
    this.setState(previousState => {
      return { click: previousState.click }

    })
  } */


  incrementCounter = () => {
    //Set counter to the amount of upgrades bought, to increment accordingly
    this.setState({
      counter: this.state.counter +
      // The counter will be added to every ten seconds
      (1 * this.state.amountOfTrees * (100/10000))
      // The counter will update every second, to render 1 avocado/second
      + (1 * this.state.amountOfFarmers * (100/1000))
      // 8 avocados per second
      + (1 * this.state.amountOfFactories * (100/125))
      //16 avocados per second
      + (1 * this.state.amountOfGMOFactories * (100/62.5))
      //32 avocados per second
      + (1 * this.state.amountOfSpaceFactories * (100/31.25))
    });
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  buyAvocadoTree = () => {
    this.setState({
      counter: this.state.counter - this.state.treeCost,
      treeCost: Math.floor(this.state.treeCost * 1.5),
      amountOfTrees: this.state.amountOfTrees + 1
    });
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

  buySpaceFactory = () => {
    this.setState({
      counter: this.state.counter - this.state.spaceFactoryCost,
      spaceFactoryCost: Math.floor(this.state.spaceFactoryCost * 1.5),
      amountOfSpaceFactories: this.state.amountOfSpaceFactories + 1
    });
  }

  render(){
    return(

      <div className="container">
        <div className="row">
          
          <Avocado  handleClick={ this.handleClick } 
                    counter={this.state.counter} />
          
          <div className="col-8">

            <UpgradeCountainer>
              <Upgrade  Cost = { this.state.treeCost } 
                        handleClick = { this.buyAvocadoTree }
                        Amount = { this.state.amountOfTrees}
                        Counter = { this.state.counter}
                        Type = "avocado trees"
                        Description = "A tree producing 1 avocado per 10 seconds"
                        Image = { TreeImage }
                        ProduceAmount = { this.state.amountOfTrees / 10 } />
            </UpgradeCountainer>

            <UpgradeCountainer>
              <Upgrade  Cost = { this.state.farmerCost }
                        handleClick = { this.buyAvocadoFarmer }
                        Amount = { this.state.amountOfFarmers }
                        Counter = { this.state.counter}
                        Type = "farmers"
                        Description = "A farmer that plants trees for you, producing 1 avocado per second"
                        Image = { FarmerImage }
                        ProduceAmount = { this.state.amountOfFarmers } />
            </UpgradeCountainer>

            <UpgradeCountainer>
              <Upgrade  Cost = { this.state.factoryCost }
                        handleClick = {this.buyAvocadoFactory}
                        Amount = { this.state.amountOfFactories }
                        Counter = { this.state.counter } 
                        Type = "factory"
                        Description = "A factory that produces 8 avocados per second"
                        Image = {FactoryImage}
                        ProduceAmount = { this.state.amountOfFactories * 8 } />
            </UpgradeCountainer>

            <UpgradeCountainer>
              <Upgrade  Cost = { this.state.GMOCost }
                        handleClick = {this.buyGMOfactory}
                        Amount = { this.state.amountOfGMOFactories }
                        Counter = { this.state.counter } 
                        Type = "GMO factory"
                        Description = "A GMO factory that produces 16 avocados per second"
                        Image = {GMOImage}
                        ProduceAmount = { this.state.amountOfGMOFactories * 16 } />
            </UpgradeCountainer>

            <UpgradeCountainer>
              <Upgrade  Cost = { this.state.spaceFactoryCost }
                        handleClick = { this.buySpaceFactory }
                        Amount = { this.state.amountOfSpaceFactories }
                        Counter = { this.state.counter }
                        Type = "space factory"
                        Description = "Let aliens grow your avocados! 32 avocados per second"
                        Image = {SpaceImage}
                        ProduceAmount = { this.state.amountOfSpaceFactories * 32 } />
            </UpgradeCountainer>
          
          </div>
        </div>
      </div>
    )
  }
}