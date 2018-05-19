import React from 'react';
import Avocado from './../images/avocado.png';

export default function AvocadoImage(props){
  return (
    <img src={Avocado} alt="Avocado" onClick={props.handleClick} />
  )
}