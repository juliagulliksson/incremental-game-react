import React, { Component } from 'react';
//import Upgrade from './Upgrade';
import Avocado from './Avocado';
import AvocadoTree from './AvocadoTree';
import DoubleClicker from './DoubleClicker';

export default class Counter extends Component {

  state = {
    counter: 0,
    treeUpgrade: false,
    doubleClickerUpgrade: false,
    treeCost: 10,
    doubleClickCount: 0,
    doubleClickerCost: 10,
    autoClickerfps: 10000,
    fps: 100,
    autoClickerInterval: 1,
    incrementClickerInterval: 0,
    amountOfTrees: 0
  } 

  componentDidMount() {
    //setInterval(this.autoClicker, this.state.autoClickerfps);
    setInterval(this.incrementclicker, this.state.fps);

    /* setInterval(() => {
      this.autoClicker();
      //this.checkClasses();
    }, this.state.autoClickerfps); */
    
  }

  checkClasses = () => {
    if(this.state.counter >= this.state.doubleClickerCost - 1){
      this.setState({
        doubleClickerUpgrade: true,
      });
    } else {
      this.setState({
        doubleClickerUpgrade: false,
      });
    } 

    if(this.state.counter >= this.state.treeCost - 1){
      this.setState({
        treeUpgrade: true,
      });
    } else {
      this.setState({
        treeUpgrade: false,
      });
    } 
  }

  autoClicker = () => {
    this.setState({counter: this.state.counter + this.state.autoClickerInterval})
  }

  incrementclicker = () => {
    //this.setState({counter: this.state.counter + this.state.incrementClickerInterval});
    this.setState({
      counter: this.state.counter +
      (this.state.autoClickerInterval * this.state.amountOfTrees * (this.state.fps/10000)) 
    })
  }

  incrementCounter = () => {
    if(this.state.doubleClickCount > 0){
      this.setState({ counter: this.state.counter + this.state.doubleClickCount });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
    this.checkClasses();
    //this.checkCounter();
  }

  checkCounter = () => {
    console.log(this.state.treeUpgrade, this.state.doubleClickerUpgrade)
  }

  buyAvocadoTree = () => {
    if(this.state.counter >= this.state.treeCost){
      this.setState({
        counter: this.state.counter - this.state.treeCost,
        treeCost: Math.floor(this.state.treeCost * 1.5),
        //autoClickerInterval: this.state.autoClickerInterval + 1,
        amountOfTrees: this.state.amountOfTrees + 1
      });
    }
  }

  buyDoubleClicker = () => {
    if(this.state.counter >= this.state.doubleClickerCost){
      this.setState({
        counter: this.state.counter - this.state.doubleClickerCost,
        doubleClickCount: this.state.doubleClickCount + 2,
        doubleClickerCost: Math.floor(this.state.doubleClickerCost * 1.5)
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
              
                <AvocadoTree  Class={ this.state.treeUpgrade ? 'upgradeable': 'non-upgradeable' } 
                              Cost={ this.state.treeCost } 
                              handleClick={ this.buyAvocadoTree }
                              Counter= {this.state.counter}/>
                <DoubleClicker  Cost={ this.state.doubleClickerCost } 
                                handleClick={ this.buyDoubleClicker }
                                Class={this.state.doubleClickerUpgrade ? 'upgradeable': 'non-upgradeable'}/>

               {/*  <button onClick={this.buyAvocadoFarmer}>Buy Avocado farmer</button>
                <button onClick={this.buyAvocadoFarm}>Buy Avocado farm</button>
                <button onClick={this.buyGMOfactory}>Buy GMO Factory</button> */}
              </div>

            </div>
          </div>      
    )
  }
}