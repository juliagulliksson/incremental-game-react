import React, { Component } from 'react';
import AvocadoImage from './../images/avocado.png';

export default class Avocado extends Component {

  state = {
    active: false
  }

  toggleClass = (bool) => {
    this.setState({active: bool})
  }

  render(){
    return (
      <div className="col-4 avocado-wrapper col-md-offset-4">
        <div className="avocado-image-wrapper">
          <img  src={ AvocadoImage } alt="Avocado"
                className = { this.state.active ? 'active': '' }  
                onClick = { this.props.handleClick } 
                onMouseDown={ () => this.toggleClass(true) } 
                onMouseUp={() => this.toggleClass(false)} />
        </div>
        <div className="counter">
          <p>{ parseInt(this.props.counter, 10) } </p>
        </div>
      </div>
      
    )
  }
}